import { Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-900 font-bold text-lg">Kelas 01SIFP009</p>
            <p className="text-slate-500 text-sm font-medium">
              Sistem Informasi - Universitas Pamulang
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Follow Us
            </p>
            <a
              href="https://www.instagram.com/01sifp009_?igsh=MXF2OXlqMnI4Y21iNg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5 rounded-xl transition-all hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              <div className="bg-white rounded-[10px] px-4 py-2 flex items-center gap-2">
                <Instagram className="w-5 h-5 text-red-500 group-hover:text-purple-600 transition-colors" />
                <span className="text-sm font-bold bg-linear-to-tr from-yellow-600 to-purple-600 bg-clip-text text-transparent">
                  @01SIFP009
                </span>
              </div>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">
              &copy; {year} Dibuat oleh{" "}
              <span className="font-semibold text-indigo-600">01SIFP009</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
