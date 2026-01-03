'use client';

export default function FrameWelcome() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-semibold mb-6">
          Your First AI Win
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Get a practical result in under 5 minutes — no tech background required.
        </p>

        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-slate-200">
          <span>⏱</span>
          <span>Module 1 · AI Made Simple</span>
        </div>
      </div>
    </section>
  );
}
