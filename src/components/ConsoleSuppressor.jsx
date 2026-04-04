"use client";

import { useEffect } from 'react';

/**
 * Suppresses common non-breaking library-level errors/warnings 
 * specifically for Spline and Three.js in a Next.js 16 context.
 */
export default function ConsoleSuppressor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const originalError = console.error;
    const originalWarn = console.warn;

    const shouldSuppress = (args) => {
      const message = args.map(arg => String(arg)).join(' ');
      // Suppress the "Missing property" error from @splinetool/runtime
      if (message.includes('Missing property')) return true;
      // Also suppress the Three.js Clock deprecation warning if it's annoying
      if (message.includes('THREE.THREE.Clock: This module has been deprecated')) return true;
      return false;
    };

    console.error = (...args) => {
      if (shouldSuppress(args)) return;
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      if (shouldSuppress(args)) return;
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return null;
}
