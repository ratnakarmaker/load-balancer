export const dynamic = 'force-dynamic';

export default async function Home() {
  const res = await fetch('https://dogapi.dog/api/v2/facts');
  const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-emerald-300 via-teal-500 to-cyan-700 p-8 font-sans">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-2xl border-t border-l border-white/40 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide shadow-black/10 drop-shadow-lg">
          Project Three
        </h1>
        <div className="text-2xl font-medium text-emerald-50 leading-relaxed">
          🐾 {data.data[0].attributes.body}
        </div>
      </div>
    </div>
  );
}
