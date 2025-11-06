import { useState } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <Rocket className="h-6 w-6 text-indigo-600" />
            <span className="text-neutral-900 dark:text-white">FinLink</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Pricing</a>
            <a href="#contact" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white">
              <User className="h-4 w-4" />
              Sign in
            </button>
            <button className="rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90">
              Get Started
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
          <div className="px-4 py-4 space-y-2">
            <a href="#features" className="block rounded-md px-3 py-2 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10">Features</a>
            <a href="#pricing" className="block rounded-md px-3 py-2 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10">Pricing</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10">Contact</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 rounded-md border border-black/10 dark:border-white/20 px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">Sign in</button>
              <button className="flex-1 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm font-semibold">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
