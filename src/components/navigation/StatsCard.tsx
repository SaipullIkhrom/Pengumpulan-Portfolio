"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface StatsCardProps {
  label: string;
  percentage: number;
  count: number;
  total: number;
  color: "indigo" | "emerald";
}

export function StatsCard({ label, percentage, count, total, color }: StatsCardProps) {
  // Animasi untuk angka persentase
  const countValue = useMotionValue(0);
  const rounded = useTransform(countValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(countValue, percentage, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [percentage, countValue]);

  const textColor = color === "indigo" ? "text-indigo-600" : "text-emerald-500";
  const bgColor = color === "indigo" ? "bg-indigo-500" : "bg-emerald-500";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-100 shadow-sm flex-1"
    >
      <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center sm:text-left">
        {label}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-1 sm:gap-2 justify-center sm:justify-start">
        <div className="flex items-start">
          <motion.span className={`text-2xl sm:text-3xl font-black ${textColor}`}>
            {rounded}
          </motion.span>
          <span className={`text-xs sm:text-sm font-bold mt-1 ${textColor}`}>%</span>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-400 mb-1 sm:mb-1.5 font-medium">
          {count}/{total}
        </span>
      </div>

      {/* Progress Bar Animasi */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className={`h-full ${bgColor}`}
        />
      </div>
    </motion.div>
  );
}