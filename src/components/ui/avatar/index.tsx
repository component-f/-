import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  children?: React.ReactNode
}

export default function Avatar({ src, alt, className, children, ...props }: AvatarProps) {
  const isImg = !!src
  return (
    <>
      {isImg ? (
        <img
          src={src}
          alt={alt}
          className={twMerge(
            `rounded-full object-cover
          w-[40px] h-[40px]`,
            className,
          )}
          {...props}
        />
      ) : (
        <div
          className={twMerge(
            `rounded-full flex items-center justify-center 
         font-semibold w-[40px] h-[40px] bg-gray-500`,
            className,
          )}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  )
}
