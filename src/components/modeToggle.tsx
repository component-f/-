'use client';

import { useTheme } from 'next-themes';

/**
 * 모드 전환 테스트를 위한 임시 컴포넌트 입니다.
 */
export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex flex-col w-40">
        <button type="button" className="p-2 rounded-lg bg-gray100 text-black" onClick={() => setTheme('light')}>
          light mode
        </button>
        <button type="button" className="p-2 rounded-lg bg-black text-white" onClick={() => setTheme('dark')}>
          dark mode
        </button>
        <button type="button" className="p-2 rounded-lg bg-gray50  text-black" onClick={() => setTheme('system')}>
          system mode
        </button>
      </div>
    </>
  );
}
