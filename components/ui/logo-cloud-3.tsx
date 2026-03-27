import type { ComponentProps } from 'react';

import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = ComponentProps<'div'> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]',
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={100} speedOnHover={40}>
        {logos.map((logo) => (
          <img
            key={`logo-${logo.alt}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width || undefined}
            height={logo.height || undefined}
            loading="lazy"
            className="pointer-events-none h-4 select-none opacity-70 brightness-0 transition-opacity md:h-5"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}


