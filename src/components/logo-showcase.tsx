import { Sparkles } from 'lucide-react';

import { LogoCloud } from '@/components/ui/logo-cloud-3';
import { cn } from '@/lib/utils';

const logos = [
  {
    src: 'https://svgl.app/library/nvidia-wordmark-light.svg',
    alt: 'Nvidia Logo',
  },
  {
    src: 'https://svgl.app/library/supabase_wordmark_light.svg',
    alt: 'Supabase Logo',
  },
  {
    src: 'https://svgl.app/library/openai_wordmark_light.svg',
    alt: 'OpenAI Logo',
  },
  {
    src: 'https://svgl.app/library/turso-wordmark-light.svg',
    alt: 'Turso Logo',
  },
  {
    src: 'https://svgl.app/library/vercel_wordmark.svg',
    alt: 'Vercel Logo',
  },
  {
    src: 'https://svgl.app/library/github_wordmark_light.svg',
    alt: 'GitHub Logo',
  },
  {
    src: 'https://svgl.app/library/claude-ai-wordmark-icon_light.svg',
    alt: 'Claude AI Logo',
  },
  {
    src: 'https://svgl.app/library/clerk-wordmark-light.svg',
    alt: 'Clerk Logo',
  },
];

export function LogoShowcase() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-black sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute left-1/2 top-0 -z-10 h-[80vmin] w-[80vmin] -translate-x-1/2 rounded-full',
          'bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent_60%)] blur-3xl'
        )}
      />

      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-black/45">
          <Sparkles size={14} className="text-black/55" />
          <span>Proof In Production</span>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
            Trusted by teams shipping faster with AI.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/50 md:text-base">
            The same workflow powering NEXORA is already familiar to the builders,
            operators, and product teams shaping modern software.
          </p>
        </div>

        <div className="mx-auto mt-10 h-px max-w-2xl bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        <LogoCloud logos={logos} className="mt-6" />
        <div className="mx-auto mt-6 h-px max-w-2xl bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
