"use client";

import { forwardRef, useEffect } from "react";
import type {
  DetailedHTMLProps,
  HTMLAttributes,
  MutableRefObject,
} from "react";

const SCRIPT_SRC = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";

let scriptPromise: Promise<void> | null = null;

function ensurePlayerScript() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (scriptPromise) {
    return scriptPromise;
  }

  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
    scriptPromise = Promise.resolve();
    return scriptPromise;
  }

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = SCRIPT_SRC;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });

  return scriptPromise;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        loop?: boolean;
        autoplay?: boolean;
        mode?: string;
      };
    }
  }
}

interface LottieAnimationProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
}

export const LottieAnimation = forwardRef<any, LottieAnimationProps>(
  ({ src, autoplay = false, loop = true }, ref) => {
    useEffect(() => {
      ensurePlayerScript().catch(() => {
        // If the script fails to load, there is no safe fallback aside from silent failure.
      });
    }, []);

    return (
      <lottie-player
        ref={ref as MutableRefObject<any>}
        src={src}
        autoplay={autoplay}
        loop={loop}
        mode="normal"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }
);

LottieAnimation.displayName = "LottieAnimation";
