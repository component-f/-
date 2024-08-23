'use client'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type SwitchProps = {
  className?: string
  id?: string
}

const Switch: React.FC<SwitchProps> = ({ className, id }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <div className="inline-flex items-center">
      {/* 스위치 body */}
      <div
        onClick={handleChange}
        className={twMerge(
          'relative flex items-center justify-start w-11 h-6 bg-[#E5E7EB] rounded-full transition-colors duration-200 ease-in-out',
          checked ? 'bg-[hsl(var(--blacktogray200))]' : 'bg-[#E5E7EB]',
          'w-[44px] h-[24px]',
          className,
        )}
      >
        {/* 스위치 toggle */}
        <span
          onClick={handleChange}
          className={twMerge(
            'absolute bg-white rounded-full transition-transform duration-200 ease-in-out cursor-pointer shadow',
            checked ? 'transform translate-x-[20px]' : 'transform translate-x-[0px]',
            'w-[26px] h-[26px]',
          )}
        />
      </div>

      {/* 체크박스 숨겨둠 */}
      <input type="checkbox" id={id} checked={checked} onChange={handleChange} className="sr-only" />
    </div>
  )
}

export default Switch
