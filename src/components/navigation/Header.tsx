"use client";

import Image from "next/image";
import { Mahasiswa } from "@/types";
import { StatsCard } from "./StatsCard";
import { FileText, ExternalLink } from "lucide-react"; // Import ikon tambahan

interface HeaderProps {
  dataMahasiswa: Mahasiswa[];
}

export default function Header({ dataMahasiswa }: HeaderProps) {
  // --- LOGIKA PERHITUNGAN ---
  const total = dataMahasiswa.length;
  
  const countWeb = dataMahasiswa.filter(mhs => 
    mhs.urlWebsite && mhs.urlWebsite !== "#" && !mhs.urlWebsite.includes("example.com")
  ).length;

  const percentWeb = total > 0 ? Math.round((countWeb / total) * 100) : 0;

  return (
    <header className="mb-12">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-indigo-500">
            <Image src="/icon/Unpam.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-slate-800 hidden sm:block">Sistem Informasi</span>
        </div>
        
        <div className="bg-slate-900 px-4 py-2 rounded-xl">
          <span className="text-white font-mono font-bold tracking-widest text-sm">01SIFP009</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
          Portfolio UAS Mahasiswa
        </h1>

        {/* --- TOMBOL PDF BESAR --- */}
        <div className="mb-8 px-4 sm:px-0">
          <a 
            href="https://drive.google.com/drive/u/0/folders/1bgZORN70UdP35NQheJ_JJWf8z_R2Benh?ths=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full max-w-md bg-linear-to-r from-emerald-600 to-teal-500 p-4 rounded-2xl text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-400/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold opacity-80 leading-none mb-1">Google Drive</p>
              <h2 className="text-base sm:text-lg font-bold leading-none">Lihat Kumpulan Laporan PDF</h2>
            </div>
            <ExternalLink className="ml-2 w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
        
        {/* Kontainer Stats */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-60">
            <StatsCard 
              label="Progres Website" 
              percentage={percentWeb} 
              count={countWeb} 
              total={total} 
              color="indigo" 
            />
          </div>
        </div>

        <p className="text-lg text-slate-600">
          Kumpulan Portfolio dari <span className="font-bold text-indigo-600">{total} Mahasiswa</span>
        </p>
      </div>
    </header>
  );
}