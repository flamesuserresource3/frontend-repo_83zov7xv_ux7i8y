import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-neutral-950/70 dark:via-neutral-950/60 dark:to-neutral-950" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Fintech-ready UI kit • Spline hero
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Connect clients and creators with trust and simplicity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            A modern platform for freelancers and businesses. Transparent pricing, secure payments, and delightful UX out of the box.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features" className="rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90">Explore features</a>
            <a href="#contact" className="rounded-md px-5 py-3 text-sm font-semibold text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur hover:bg-white/90 dark:hover:bg-neutral-900/90">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
