import { twMerge } from 'tailwind-merge';
import React from 'react';

type TAlertProps = React.ComponentPropsWithoutRef<'div'> & {
  title?: string
  btn?: () => void
  icon?: React.ReactNode
  children: React.ReactNode
}

export default function Alert({ className, icon, title, children, btn, ...rest }: TAlertProps) {
  return (
    <div
      className={twMerge(
        'flex place-items-center text-sm rounded-lg w-[500px] h-[54px] px-[16px] border-border border',
        className,
      )}
      {...rest}
    >
      {icon && icon}
      <div className={`flex flex-1 flex-col ${icon && 'pl-[16px]'}`}>
        {title && <h2 className="font-bold">{title}</h2>}
        <p>{children}</p>
      </div>
      {btn && <button className="pl-[16px]">Undo</button>}
    </div>
  );
}
