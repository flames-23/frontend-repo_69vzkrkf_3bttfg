import { HeartHandshake } from "lucide-react";

export default function FinalPoem() {
  return (
    <section className="max-w-2xl mx-auto text-center bg-white/70 backdrop-blur rounded-2xl p-8 shadow-xl border border-rose-100">
      <div className="inline-flex items-center gap-2 text-rose-600 bg-rose-50 rounded-full px-3 py-1 mb-4">
        <HeartHandshake className="w-4 h-4" />
        <span className="text-sm font-medium">For my favorite person</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">A Little Poem</h3>
      <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
{`Eleven months, and here's my truth,
In quiet smiles and moments smooth;
Through silly jokes and rainy skies,
You light the dark behind my eyes.

With every step and every start,
You are the steady of my heart;
If love's a map, then you're the key—
Home is any place with thee.

So here's to us—today, and more—
To chapters only we explore;
For every clue, the prize was clear:
It's you, my love, I'm glad you're here.`}
      </p>
      <p className="mt-6 text-sm text-gray-500">Happy 11 months, my love. 💖</p>
    </section>
  );
}
