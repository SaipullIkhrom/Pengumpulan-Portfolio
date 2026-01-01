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
  const isWebsiteValid = Boolean(
    mhs?.urlWebsite &&
      mhs.urlWebsite !== "#" &&
      !mhs.urlWebsite.includes("example.com")
  );
  const isPdfValid = Boolean(mhs?.urlPdf && mhs.urlPdf !== "#");

  const containerVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.05 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const handleButtonClick = (e: React.MouseEvent, isValid: boolean) => {
    e.stopPropagation();
    if (!isValid) e.preventDefault();
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="group relative bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden active:scale-[0.98]"
    >
      {/* 1. NOMOR URUT */}
      <div className="absolute top-0 right-0 overflow-hidden rounded-bl-xl sm:rounded-bl-3xl">
        <div className="bg-slate-900 group-hover:bg-indigo-600 text-white px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center transition-colors duration-300">
          <span className="text-[8px] sm:text-[10px] font-black tracking-tighter opacity-50 mr-1">
            NO.
          </span>
          <span className="text-xs sm:text-sm font-black tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Header Info */}
      <div className="relative mb-3 sm:mb-6 mt-6 sm:mt-8">
        <div className="flex justify-between items-start">
          <h3 className="text-xs sm:text-lg font-bold text-slate-800 leading-tight line-clamp-2 h-8 sm:h-12 group-hover:text-indigo-600 transition-colors">
            {mhs.nama}
          </h3>
          <Info className="hidden sm:block w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors shrink-0 ml-2" />
        </div>

        <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-100 mt-1 sm:mt-2 border border-slate-200/50">
          <p className="text-[8px] sm:text-[10px] text-slate-600 font-mono font-bold uppercase tracking-wider">
            {mhs.nim}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 sm:gap-3 relative">
        <a
          href={isWebsiteValid ? mhs.urlWebsite : "#"}
          target={isWebsiteValid ? "_blank" : "_self"}
          rel="noopener noreferrer"
          onClick={(e) => handleButtonClick(e, isWebsiteValid)}
          className={`flex items-center justify-center sm:justify-between gap-2 w-full px-2 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-semibold transition-all duration-200 shadow-sm sm:shadow-md ${
            isWebsiteValid
              ? "bg-slate-900 text-white hover:bg-indigo-600"
              : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{isWebsiteValid ? "Website" : "Kosong"}</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4" />
        </a>

        <a
          href={isPdfValid ? mhs.urlPdf : "#"}
          target={isPdfValid ? "_blank" : "_self"}
          onClick={(e) => handleButtonClick(e, isPdfValid)}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 w-full py-2 sm:py-3 rounded-xl sm:rounded-2xl border font-bold transition-all text-[10px] sm:text-sm ${
            isPdfValid
              ? "border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-indigo-100"
              : "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed shadow-none"
          }`}
        >
          <Download
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              isPdfValid
                ? "text-slate-400 group-hover:text-indigo-500"
                : "text-slate-200"
            }`}
          />
          <span>{isPdfValid ? "PDF" : "N/A"}</span>
        </a>
      </div>

      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
