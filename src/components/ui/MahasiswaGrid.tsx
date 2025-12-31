"use client";

import { useEffect, useRef, useState } from "react";
import { Mahasiswa } from "@/types";
import MahasiswaCard from "./MahasiswaCard";
import MahasiswaSkeleton from "./MahasiswaSkeleton";
import DetailModal from "./DetailModal"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MahasiswaGridProps {
  data: Mahasiswa[];
  searchTerm: string;
}

export default function MahasiswaGrid({ data, searchTerm }: MahasiswaGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMhs, setSelectedMhs] = useState<Mahasiswa | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const ctx = gsap.context(() => {
        gsap.from(".mhs-item", {
          opacity: 0,
          y: 40,
          scale: 0.95,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", 
            toggleActions: "play none none none",
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isLoading, data]);
  const handleOpenModal = (mhs: Mahasiswa) => {
    setSelectedMhs(mhs);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <MahasiswaSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
        <p className="text-slate-500 text-lg">
          Mahasiswa dengan kata kunci &quot;{searchTerm}&quot; tidak ditemukan.
        </p>
      </div>
    );
  }

  return (
    <>
      <div 
        ref={containerRef} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {data.map((mhs, index) => (
          <div 
            key={mhs.id} 
            className="mhs-item cursor-pointer" 
            onClick={() => handleOpenModal(mhs)} 
          >
            <MahasiswaCard mhs={mhs} index={index} />
          </div>
        ))}
      </div>

      <DetailModal 
        mhs={selectedMhs} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}