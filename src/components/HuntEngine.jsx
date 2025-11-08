import { useState } from "react";
import { KeyRound, AlertCircle, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    title: "Clue 1 — Our First Hello",
    prompt: "What greeting started it all? (hint: the very first word you sent me)",
    answer: "hi",
    error: "Close! Think tiny and simple — just two letters.",
  },
  {
    title: "Clue 2 — Favorite Drink",
    prompt: "Warm and cozy. What drink do I make you when it's rainy?",
    answer: "hot chocolate",
    error: "Mmm... it's sweet and chocolatey. Two words.",
  },
  {
    title: "Clue 3 — Our Spot",
    prompt: "Where do we love to sit and watch the world go by?",
    answer: "park bench",
    error: "Picture trees, birds, and us. Two words.",
  },
  {
    title: "Clue 4 — Inside Joke",
    prompt: "Finish the line: You're the peanut butter to my ____.",
    answer: "jelly",
    error: "Sandwich soulmates. One word.",
  },
  {
    title: "Clue 5 — The Soundtrack",
    prompt: "Name the song we keep playing on loop (short title, no punctuation).",
    answer: "yellow",
    error: "Coldplay would approve.",
  },
  {
    title: "Clue 6 — Movie Night Snack",
    prompt: "Crunchy, buttery goodness we fight over.",
    answer: "popcorn",
    error: "It pops!",
  },
  {
    title: "Clue 7 — The Date",
    prompt: "What month number did we begin? (just the number)",
    answer: "11",
    error: "It's the number we're celebrating today!",
  },
  {
    title: "Clue 8 — Secret Nickname",
    prompt: "What do I always call you when I'm being extra sweet?",
    answer: "princess",
    error: "Royal and adorable.",
  },
];

export default function HuntEngine({ onComplete }) {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [correct, setCorrect] = useState(false);

  const current = STEPS[step];

  function checkAnswer(e) {
    e.preventDefault();
    const normalized = input.trim().toLowerCase();
    if (normalized === current.answer) {
      setError("");
      setCorrect(true);
      setTimeout(() => {
        setCorrect(false);
        setInput("");
        if (step === STEPS.length - 1) {
          onComplete();
        } else {
          setStep(step + 1);
        }
      }, 700);
    } else {
      setCorrect(false);
      setError(current.error);
    }
  }

  return (
    <section className="max-w-xl mx-auto w-full bg-white/70 backdrop-blur rounded-2xl p-6 shadow-xl border border-rose-100">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
        {current.title}
      </h3>
      <p className="text-gray-600 mb-4">{current.prompt}</p>

      <form onSubmit={checkAnswer} className="flex gap-3">
        <div className="flex-1 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer..."
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
          <KeyRound className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-rose-600 text-white px-5 py-3 font-semibold shadow-md hover:bg-rose-700 transition"
        >
          Unlock
        </button>
      </form>

      {error && (
        <div className="mt-4 flex items-start gap-2 text-rose-700 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
          <AlertCircle className="w-5 h-5 mt-0.5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {correct && (
        <div className="mt-4 flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
          <CheckCircle2 className="w-5 h-5" />
          <p className="text-sm">Correct! Unlocking next clue...</p>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">Clue {step + 1} of {STEPS.length}</div>
    </section>
  );
}
