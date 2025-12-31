"use client";
import { useEffect, useRef, useState } from "react";
import { Mahasiswa } from "@/types";
import MahasiswaCard from "@/components/ui/MahasiswaCard";
import MahasiswaSkeleton from "@/components/ui/MahasiswaSkeleton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MahasiswaList({ data }: { data: Mahasiswa[] }) {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".mhs-item");
      
      gsap.fromTo(cards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, [loading]);

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {loading
        ? Array.from({ length: 12 }).map((_, i) => <MahasiswaSkeleton key={i} />)
        : data.map((mhs, index) => (
            <div key={mhs.id} className="mhs-item">
              <MahasiswaCard mhs={mhs} index={index} />
            </div>
          ))}
    </div>
  );
}