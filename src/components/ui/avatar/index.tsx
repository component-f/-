import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  children?: React.ReactNode
}

export default function Avatar({ src, alt, className, children, ...props }: AvatarProps) {
  //이미지 있을때와 없을때를 구분하기 위해
  const isImg = !!src

  // 배경색 유무에 따른 다크모드 적용 설정
  const defaultBgClass = 'bg-[#E5E7EB] dark:bg-[#969697]'
  const hasBgClass = className?.includes('bg-')
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
         font-semibold w-[40px] h-[40px] `,
            hasBgClass ? className : twMerge(defaultBgClass, className),
          )}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  )
}
