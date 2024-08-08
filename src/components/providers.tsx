'use client';

import { ThemeProvider as NextThemesProcider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export default function ThemeProviders({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <NextThemesProcider {...props}>{children}</NextThemesProcider>
    </>
  );
}
