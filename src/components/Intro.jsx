import { Sparkles } from "lucide-react";

export default function Intro({ onStart }) {
  return (
    <section className="max-w-2xl mx-auto text-center space-y-4">
      <div className="inline-flex items-center gap-2 text-rose-600 bg-rose-50 rounded-full px-3 py-1">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">11 months of magic</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Ready for a love-filled treasure hunt?
      </h2>
      <p className="text-gray-600 leading-relaxed">
        You'll get 8 clues. Each answer unlocks the next step. If you slip up, a gentle hint will guide you back. At the end, a little poem is waiting just for you.
      </p>
      <button
        onClick={onStart}
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-rose-600 text-white px-6 py-3 text-base font-semibold shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition"
      >
        Start the Hunt
      </button>
    </section>
  );
}
