import { Shield, Zap, CreditCard, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'End-to-end security with encryption, roles, and audit trails built-in.'
  },
  {
    icon: CreditCard,
    title: 'Payments ready',
    desc: 'Stripe and PayPal integrations for quick checkout and payouts.'
  },
  {
    icon: Zap,
    title: 'Fast & scalable',
    desc: 'Optimized for performance, SEO, and global edge delivery.'
  },
  {
    icon: Globe,
    title: 'Global audience',
    desc: 'Multi-language, accessibility, and responsive across devices.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-50/60 to-transparent dark:via-indigo-500/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Everything you need to launch</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">A complete toolkit for marketplaces, SaaS, and fintech experiences.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
              <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
