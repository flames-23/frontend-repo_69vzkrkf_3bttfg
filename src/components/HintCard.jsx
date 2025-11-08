import React from 'react';
import { Lock, Unlock, AlertCircle } from 'lucide-react';

export default function HintCard({
  index,
  title,
  prompt,
  inputPlaceholder = 'Type your answer…',
  value,
  onChange,
  onSubmit,
  solved,
  error,
}) {
  return (
    <div className={`relative rounded-2xl border p-5 sm:p-6 transition-all ${
      solved
        ? 'bg-emerald-50/70 border-emerald-200 shadow-inner'
        : 'bg-white/80 border-rose-100 shadow'
    }`}>
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 flex items-center justify-center rounded-full ${
          solved ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
        }`}>
          {solved ? <Unlock size={20} /> : <Lock size={20} />}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{index}. {title}</h3>
          <p className="text-sm text-gray-500">{prompt}</p>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="mt-4 flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={inputPlaceholder}
          className="flex-1 rounded-xl border border-gray-200 bg-white/70 px-4 py-2.5 outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-200"
          disabled={solved}
        />
        <button
          type="submit"
          disabled={solved}
          className={`rounded-xl px-4 py-2.5 font-medium transition-colors ${
            solved
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-rose-600 text-white hover:bg-rose-700'
          }`}
        >
          {solved ? 'Solved' : 'Unlock'}
        </button>
      </form>

      {error && !solved && (
        <div className="mt-3 flex items-center gap-2 text-rose-600 text-sm">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
