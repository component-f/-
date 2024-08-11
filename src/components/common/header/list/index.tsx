'use client';

import React from 'react';
import { PATH } from '@/constants/path';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TListProps = {
  children: React.ReactNode
  path: ValueOf<typeof PATH>
}

export default function List(props: TListProps) {
  const { children, path } = props;

  const pathname = usePathname();
  const rootPath = pathname.split('/')[1];
  const propPath = path.split('/')[1];

  return (
    <li className={`hover:text-primary-hover ${rootPath === propPath ? 'text-primary-active' : ''}`}>
      <Link href={path}>{children}</Link>
    </li>
  );
}
