import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function Avatar({ src, alt, className, ...props }: AvatarProps) {
  return (
    <>
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
    </>
  )
}
