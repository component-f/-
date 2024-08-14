import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  children?: React.ReactNode
}

export default function Avatar({ src, alt, className, children, ...props }: AvatarProps) {
  //이미지 있을때와 없을때를 구분하기 위해
  const isImg = !!src

  return (
    <>
      {isImg ? (
        <img
          src={src}
          alt={alt}
          className={twMerge(
            `rounded-full object-cover
          w-[40px] h-[40px] bg-white`,
            className,
          )}
          {...props}
        />
      ) : (
        <div
          className={twMerge(
            `rounded-full flex items-center justify-center 
         font-medium text-sm w-[40px] h-[40px] bg-border`,
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
