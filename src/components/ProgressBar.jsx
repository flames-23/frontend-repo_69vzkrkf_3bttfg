import React from 'react';

export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-600">Progress</p>
        <p className="text-sm font-medium text-rose-600">{pct}%</p>
      </div>
      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-rose-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
