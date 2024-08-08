import React from 'react';
import ThemeProviders from '@/components/providers';
import pretendard from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata = {
  title: 'Component-Factory',
  description: '컴포넌트 UI 라이브러리입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
        <ThemeProviders attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
