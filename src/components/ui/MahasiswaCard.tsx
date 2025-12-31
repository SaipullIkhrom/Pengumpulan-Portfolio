"use client";

import { Mahasiswa } from "@/types";
import { Globe, ArrowRight, Download, Info } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function MahasiswaCard({
  mhs,
  index,
}: {
  mhs: Mahasiswa;
  index: number;
}) {
  // --- LOGIKA VALIDASI ---
  const isWebsiteValid = Boolean(
    mhs?.urlWebsite &&
      mhs.urlWebsite !== "#" &&
      !mhs.urlWebsite.includes("example.com")
  );
  const isPdfValid = Boolean(mhs?.urlPdf && mhs.urlPdf !== "#");

  const arrowVariants: Variants = {
    initial: { x: 0, opacity: 0.5 },
    hover: {
      x: 5,
      opacity: [1, 0.3, 1],
      transition: {
        x: { duration: 0.3 },
        opacity: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
      },
    },
  };

  const downloadVariants: Variants = {
    initial: { y: 0 },
    hover: {
      y: [0, 3, 0],
      transition: { repeat: Infinity, duration: 0.6, ease: "easeInOut" },
    },
  };

  const handleButtonClick = (e: React.MouseEvent, isValid: boolean) => {
    e.stopPropagation();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="group relative bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden active:scale-[0.98]"
    >
      {/* Label Nomor Urut */}
      <div className="absolute left-0 top-0 flex items-center">
        <div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-br-2xl group-hover:bg-indigo-600 transition-colors duration-300 z-10">
          #{index + 1}
        </div>
        <span className="ml-2 text-[9px] font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-tighter">
          Lihat Detail
        </span>
      </div>

      <div className="relative mb-6 mt-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-slate-800 leading-tight line-clamp-2 h-12 group-hover:text-indigo-600 transition-colors">
            {mhs.nama}
          </h3>
          <Info className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors shrink-0 ml-2" />
        </div>

        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 mt-2">
          <p className="text-[10px] text-slate-600 font-mono font-bold uppercase">
            {mhs.nim}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 relative">
        {/* Tombol Website */}
        <a
          href={isWebsiteValid ? mhs.urlWebsite : "#"}
          target={isWebsiteValid ? "_blank" : "_self"}
          rel="noopener noreferrer"
          onClick={(e) => handleButtonClick(e, isWebsiteValid)}
          className={`flex items-center justify-between gap-2 w-full px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 shadow-md ${
            isWebsiteValid
              ? "bg-slate-900 text-white hover:bg-indigo-600"
              : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{isWebsiteValid ? "Lihat Website" : "Web Belum Ada"}</span>
          </div>
          {isWebsiteValid && (
            <motion.div variants={arrowVariants}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          )}
        </a>

        {/* Tombol PDF */}
        <a
          href={isPdfValid ? mhs.urlPdf : "#"}
          target={isPdfValid ? "_blank" : "_self"}
          onClick={(e) => handleButtonClick(e, isPdfValid)}
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-2xl border font-bold transition-all ${
            isPdfValid
              ? "border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-indigo-100"
              : "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed shadow-none"
          }`}
        >
          <motion.div variants={downloadVariants}>
            <Download
              className={`w-4 h-4 ${
                isPdfValid
                  ? "text-slate-400 group-hover:text-indigo-500"
                  : "text-slate-200"
              }`}
            />
          </motion.div>
          <span>{isPdfValid ? "Buka PDF" : "PDF BELUM TERSEDIA"}</span>
        </a>
      </div>

      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
