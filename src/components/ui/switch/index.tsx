'use client'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type SwitchProps = {
  className?: string
}

const Switch: React.FC<SwitchProps> = ({ className }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={handleChange} className="sr-only" />
      <div
        className={twMerge(
          'w-11 h-6 bg-gray-300 rounded-full transition-colors duration-200  ease-in-out',
          checked ? 'bg-black' : 'bg-gray-300',
          'w-[44px] h-[24px] rounded-full',
          className,
        )}
      >
        <span
          className={twMerge(
            'absolute bg-white rounded-full shadow-lg transition-transform duration-200 ease-in-out',
            checked ? 'transform translate-x-[20px]' : 'transform translate-x-[-1px]',
            'w-[26px] h-[26px]',
          )}
          style={{
            boxShadow: '0 1px 4px 0 rgba(12, 12, 13, 0.1)',
            top: '-1px',
          }}
        />
      </div>
    </label>
  )
}

export default Switch
