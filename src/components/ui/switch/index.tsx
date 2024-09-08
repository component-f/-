'use client'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type SwitchProps = {
  className?: string
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
}
const Switch: React.FC<SwitchProps> = ({ className, id, checked, defaultChecked, disabled }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false)

  useEffect(() => {
    if (checked === true) {
      setIsChecked(checked)
    }
  }, [checked])
  const handleChange = () => {
    if (!disabled) {
      setIsChecked(!isChecked)
    }
  }

  // className에 bg 있을경우 체크에만 해당되게 분리
  const bgClassName = (className || ' ')
    .split(' ')
    .filter((cn) => cn.startsWith('bg-'))
    .join(' ')

  const otherClassName = (className || ' ')
    .split(' ')
    .filter((cn) => !cn.startsWith('bg-'))
    .join(' ')

  return (
    <div className={twMerge('inline-flex items-center', disabled && 'opacity-50 cursor-not-allowed')}>
      {/* 스위치 body */}
      <div
        onClick={handleChange}
        className={twMerge(
          'relative flex items-center justify-start w-8 h-6 bg-[#E5E7EB] rounded-full transition-colors duration-200 ease-in-out',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          isChecked ? twMerge('bg-ring', bgClassName) : 'bg-accent',
          'w-[44px] h-[24px]',
          otherClassName,
        )}
      >
        {/* 스위치 toggle */}
        <span
          onClick={handleChange}
          className={twMerge(
            'absolute bg-background rounded-full transition-transform duration-200 ease-in-out cursor-pointer shadow',
            isChecked ? 'transform translate-x-[22px]' : 'transform translate-x-[2px]',
            'w-[20px] h-[20px]',
          )}
        />
      </div>

      {/* 체크박스 숨겨둠 */}
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="sr-only"
      />
    </div>
  )
}

export { Switch }
