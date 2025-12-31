export default function MahasiswaSkeleton() {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm animate-pulse">
      <div className="w-10 h-6 bg-slate-200 rounded-br-2xl mb-4" />
      <div className="h-6 bg-slate-200 rounded-md w-3/4 mb-3" />
      <div className="h-4 bg-slate-100 rounded-md w-1/2 mb-8" />
      <div className="space-y-3">
        <div className="h-12 bg-slate-200 rounded-2xl w-full" />
        <div className="h-12 bg-slate-100 rounded-2xl w-full" />
      </div>
    </div>
  );
}