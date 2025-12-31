"use client";

import { Mahasiswa } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Globe, FileText, ExternalLink } from "lucide-react";

interface DetailModalProps {
  mhs: Mahasiswa | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailModal({
  mhs,
  isOpen,
  onClose,
}: DetailModalProps) {
  if (!mhs) return null;

  // Logika Periksa Link
  const isWebsiteValid =
    mhs.urlWebsite &&
    mhs.urlWebsite !== "#" &&
    !mhs.urlWebsite.includes("example.com");
  const isPdfValid = mhs.urlPdf && mhs.urlPdf !== "#";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 w-screen h-screen bg-slate-900/60 backdrop-blur-md"
          />

          {/* Konten Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 40,
              transition: { duration: 0.2 },
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-8 text-white relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold truncate">{mhs.nama}</h2>
                  <p className="text-indigo-100 text-sm font-mono">{mhs.nim}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 gap-4">
                {/* URL Website */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Globe className="w-5 h-5 text-indigo-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      URL Website
                    </p>
                    {isWebsiteValid ? (
                      <a
                        href={mhs.urlWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-700 font-medium hover:text-indigo-600 flex items-center gap-1 group/link"
                      >
                        <span className="truncate">
                          {mhs.urlWebsite.replace(/^https?:\/\//, "")}
                        </span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-50 group-hover/link:opacity-100" />
                      </a>
                    ) : (
                      <p className="text-sm text-slate-400 italic">
                        Belum tersedia
                      </p>
                    )}
                  </div>
                </div>

                {/* Dokumen PDF */}
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <FileText className="w-5 h-5 text-indigo-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Dokumen PDF
                    </p>
                    {isPdfValid ? (
                      <a
                        href={mhs.urlPdf}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-700 font-medium hover:text-indigo-600 flex items-center gap-1 w-fit group/link"
                      >
                        <span className="truncate">Lihat Laporan Lengkap</span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-50 group-hover/link:opacity-100" />
                      </a>
                    ) : (
                      <p className="text-sm text-slate-400 italic">
                        Belum tersedia
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all"
              >
                Tutup Detail
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
