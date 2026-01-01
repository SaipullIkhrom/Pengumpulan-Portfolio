"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import SearchBar from "@/components/navigation/SearchBar";
import MahasiswaGrid from "@/components/ui/MahasiswaGrid";
import { daftarMahasiswa } from "@/data/mahasiswa";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMahasiswa = daftarMahasiswa.filter((mhs) => {
    const s = searchTerm.toLowerCase();
    return (
      mhs.nama.toLowerCase().includes(s) || 
      mhs.nim.toLowerCase().includes(s) 
    );
  });

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <Header dataMahasiswa={daftarMahasiswa} />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <MahasiswaGrid data={filteredMahasiswa} searchTerm={searchTerm} />
        
        <Footer />
      </div>
    </main>
  );
}