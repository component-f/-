import { twMerge } from 'tailwind-merge'
import React from 'react'

type TAlertProps = React.ComponentPropsWithoutRef<'div'> & {
  title?: string
  btn?: () => void
  btnMsg?: string
  icon?: React.ReactNode
  description?: string
}

export default function Alert({ className, icon, title, description, btn, btnMsg, ...props }: TAlertProps) {
  return (
    <div
      className={twMerge(
        'flex place-items-center text-sm rounded-lg w-[500px] h-[54px] px-[16px] border-border border',
        className,
      )}
      {...props}
    >
      {icon && icon}
      <div className={`flex flex-1 flex-col ${icon && 'pl-[16px]'}`}>
        {title && <h2 className="font-bold">{title}</h2>}
        <p>{description}</p>
      </div>
      {btn && (
        <button onClick={btn} className="pl-[16px]">
          {btnMsg}
        </button>
      )}
    </div>
  )
}
