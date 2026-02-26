export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-14 h-14 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin" />
        <p className="text-slate-500 font-medium text-sm tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}
