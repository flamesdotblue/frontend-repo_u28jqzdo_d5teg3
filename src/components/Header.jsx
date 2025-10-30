import React from 'react';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
              <Rocket size={20} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-900">
                Disaster Management Digital Transformation
              </h1>
              <p className="text-xs text-slate-500">Strategic Framework, Technical Solution, and Execution Plan</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
