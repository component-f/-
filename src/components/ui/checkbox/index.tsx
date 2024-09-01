import React from 'react'

interface CheckBoxProps {
  label: string
  name: string
  value: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  direction?: 'horizontal' | 'vertical'
  disabled?: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  direction = 'horizontal',
  disabled = false,
}) => {
  return (
    <label
      className={`flex ${direction === 'vertical' ? 'flex-col items-start' : 'items-center'} mb-4 mr-4 ${
        disabled ? 'cursor-not-allowed opacity-20' : 'cursor-pointer'
      }`}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="peer hidden"
      />
      <span
        className={`w-5 h-5 inline-block border-2 rounded-md transition-all duration-200 ${
          disabled && checked
            ? 'bg-gray-400 border-gray-400'
            : checked
              ? 'bg-black border-black'
              : 'bg-white border-black'
        }`}
      >
        {checked && (
          <svg
            className="w-full h-full text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <span className="ml-2 peer-disabled:text-gray-400">{label}</span>
    </label>
  )
}

export default CheckBox
