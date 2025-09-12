"use client"
import { cn } from "./lib/utils/cn";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: string | number | boolean | React.ReactNode;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <>
      <div
        className={cn(
          "group flex overflow-hidden p-2 [--duration:60s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "animate-marquee-reverse": reverse,
              })}
            >
              {children}
            </div>
          ))}
      </div>
      <style jsx global>{`
        /* Horizontal marquee */
        @keyframes marquee-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        /* Vertical marquee */
        @keyframes marquee-x-reverse {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        /* Classes referenced by the component */
        .animate-marquee {
          animation: marquee-x var(--duration, 20s) linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-x-reverse var(--duration, 20s) linear infinite;
          will-change: transform;
        }
      `}</style>
    </>
  );
}
