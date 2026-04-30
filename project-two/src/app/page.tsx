export const dynamic = 'force-dynamic';

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-8 font-sans">
      <div className="max-w-2xl w-full bg-black/20 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-2 duration-300">
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-6 drop-shadow-sm">
          Project Two
        </h1>
        <div className="text-xl text-white/90 space-y-4 font-light">
          <p><span className="font-semibold">Name:</span> {data.name}</p>
          <p><span className="font-semibold">Email:</span> {data.email}</p>
          <p><span className="font-semibold">Company:</span> {data.company.name}</p>
          <p className="mt-4 text-cyan-100 italic">" {data.company.catchPhrase} "</p>
        </div>
      </div>
    </div>
  );
}
