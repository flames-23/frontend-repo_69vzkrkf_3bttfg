import React, { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import HintCard from './components/HintCard.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import FinalPoem from './components/FinalPoem.jsx';

const HINTS = [
  {
    title: 'Where our mornings start',
    prompt: 'It hums, it warms, it smells like hope. What wakes us up and fills our cups?',
    answer: 'coffee',
  },
  {
    title: 'Tiny adventures',
    prompt: 'We stepped out together, shoes laced tight. What do we call those cozy little wanders?',
    answer: 'walks',
  },
  {
    title: 'Screen to screen',
    prompt: 'When the miles stretch long, what keeps our faces close and smiles closer?',
    answer: 'video call',
    variants: ['videocall', 'video calls', 'facetimes', 'facetime'],
  },
  {
    title: 'Our soundtrack',
    prompt: 'A chorus in the car and in the room — what do we share that always finds the tune?',
    answer: 'playlist',
  },
  {
    title: 'Secret language',
    prompt: 'Two words that say so much more. Our soft code for “I’m with you.”',
    answer: 'inside joke',
    variants: ['inside jokes', 'joke', 'jokes'],
  },
  {
    title: 'Warm and safe',
    prompt: 'No matter the weather, this is home when your arms are around me.',
    answer: 'hug',
    variants: ['hugs', 'cuddle', 'cuddles'],
  },
  {
    title: 'Our month',
    prompt: 'Count the moons we’ve circled together. What number are we celebrating?',
    answer: '11',
    variants: ['eleven'],
  },
  {
    title: 'The treasure',
    prompt: 'The last key is the simplest: what am I giving you at the end of this hunt?',
    answer: 'poem',
    variants: ['a poem', 'the poem'],
  },
];

function normalize(str) {
  return (str || '').toString().trim().toLowerCase();
}

export default function App() {
  const total = HINTS.length;
  const [current, setCurrent] = useState(0);
  const [values, setValues] = useState(() => HINTS.map(() => ''));
  const [errors, setErrors] = useState(() => HINTS.map(() => ''));
  const solvedCount = useMemo(() => current, [current]);

  const handleChange = (i, v) => {
    setValues((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
    setErrors((prev) => {
      const next = [...prev];
      next[i] = '';
      return next;
    });
  };

  const handleSubmit = (i) => {
    if (i !== current) return; // only current hint can be solved
    const val = normalize(values[i]);
    const { answer, variants = [] } = HINTS[i];
    const accepted = [normalize(answer), ...variants.map(normalize)];

    if (accepted.includes(val)) {
      // mark solved and advance
      setCurrent((c) => Math.min(c + 1, total));
    } else {
      setErrors((prev) => {
        const next = [...prev];
        const playful = [
          'Close, but not quite. Try another angle! ✨',
          'Hmm, warmer… but not hot yet. 🔎',
          'That guess was cute. Give it one more go! 💘',
          'A little off. Think about our moments together. 🧭',
        ];
        next[i] = playful[Math.floor(Math.random() * playful.length)];
        return next;
      });
    }
  };

  const resetHunt = () => {
    setCurrent(0);
    setValues(HINTS.map(() => ''));
    setErrors(HINTS.map(() => ''));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50/30 to-white text-gray-800">
      <Header />

      <main className="max-w-3xl mx-auto px-6 pb-16">
        <div className="mb-6">
          <ProgressBar current={solvedCount} total={total} />
        </div>

        <section className="space-y-5">
          {HINTS.map((h, i) => (
            <HintCard
              key={i}
              index={i + 1}
              title={h.title}
              prompt={h.prompt}
              value={values[i]}
              onChange={(v) => handleChange(i, v)}
              onSubmit={() => handleSubmit(i)}
              solved={i < current}
              error={errors[i]}
              inputPlaceholder={i === 6 ? 'Type the number…' : 'Type your answer…'}
            />
          ))}
        </section>

        <FinalPoem visible={current === total} />

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Tip: Answers aren’t case sensitive. Follow the sequence; each unlocks the next.
          </p>
          <button
            onClick={resetHunt}
            className="text-sm rounded-lg px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            Restart
          </button>
        </div>
      </main>
    </div>
  );
}
