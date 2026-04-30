export const dynamic = 'force-dynamic';

export default async function Home() {
  const res = await fetch('https://dummyjson.com/quotes/random');
  const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 p-8 font-sans">
      <div className="max-w-2xl w-full bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-3xl shadow-2xl transition-transform hover:scale-105 duration-500 ease-out">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
          Project One
        </h1>
        <blockquote className="text-2xl font-medium text-white/90 italic leading-relaxed mb-4">
          "{data.quote}"
        </blockquote>
        <p className="text-right text-lg text-white/80 font-semibold tracking-wide">
          — {data.author}
        </p>
      </div>
    </div>
  );
}
