"use client";

import Image from "next/image";
import { Mahasiswa } from "@/types";
import { StatsCard } from "./StatsCard";
interface HeaderProps {
  dataMahasiswa: Mahasiswa[];
}

export default function Header({ dataMahasiswa }: HeaderProps) {
  // --- LOGIKA PERHITUNGAN ---
  const total = dataMahasiswa.length;
  
  const countWeb = dataMahasiswa.filter(mhs => 
    mhs.urlWebsite && mhs.urlWebsite !== "#" && !mhs.urlWebsite.includes("example.com")
  ).length;

  const countPdf = dataMahasiswa.filter(mhs => mhs.urlPdf && mhs.urlPdf !== "#").length;

  const percentWeb = total > 0 ? Math.round((countWeb / total) * 100) : 0;
  const percentPdf = total > 0 ? Math.round((countPdf / total) * 100) : 0;

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
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">
          Portfolio UAS Mahasiswa
        </h1>
        
        {/* Kontainer Stats */}
        <div className="flex flex-row gap-4 max-w-md mx-auto mb-8">
          <StatsCard 
            label="Website" 
            percentage={percentWeb} 
            count={countWeb} 
            total={total} 
            color="indigo" 
          />
          <StatsCard 
            label="Laporan PDF" 
            percentage={percentPdf} 
            count={countPdf} 
            total={total} 
            color="emerald" 
          />
        </div>

        <p className="text-lg text-slate-600">
          Kumpulan Portfolio dari <span className="font-bold text-indigo-600">{total} Mahasiswa</span>
        </p>
      </div>
    </header>
  );
}