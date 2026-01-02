import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="max-w-xl mx-auto mb-12 relative group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
      </div>

      <input
        type="text"
        placeholder="Cari nama atau NIM mahasiswa..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium"
      />
    </div>
  );
}
