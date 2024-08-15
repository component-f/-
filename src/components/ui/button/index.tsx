import React from 'react'
import { twMerge } from 'tailwind-merge'

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, className, ...rest }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
        {...rest}
      />
      <div
        className={twMerge(
          'w-11 h-6 bg-gray-300 rounded-full transition-colors duration-200 ease-in-out',
          checked ? 'bg-green-500' : 'bg-gray-300',
          className,
        )}
      >
        <span
          className={twMerge(
            'w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out',
            checked ? 'translate-x-6' : 'translate-x-1',
          )}
        />
      </div>
    </label>
  )
}

export default Switch
