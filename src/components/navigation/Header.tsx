import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-12">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-indigo-500">
            <Image
              src="/icon/Unpam.png" 
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-slate-800 hidden sm:block">Sistem Informasi</span>
        </div>
        
        <div className="bg-indigo-600 px-4 py-2 rounded-lg">
          <span className="text-white font-mono font-bold tracking-widest">
            01SIFP009
          </span>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
          Halaman ini dibuat, khusus mengumpulkan website portfolio UAS mahasiswa
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Kumpulan Portfolio semester 1 dan PDF dari <span className="font-bold text-indigo-600">32 Mahasiswa</span>
        </p>
      </div>
    </header>
  );
}