import React from 'react'

interface CheckBoxProps {
  label: string
  name: string
  value: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  direction?: 'horizontal' | 'vertical'
  disabled?: boolean
  className?: string
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  direction = 'horizontal',
  disabled = false,
  className = '',
}) => {
  return (
    <label
      className={`flex ${direction === 'vertical' ? 'flex-col items-start' : 'items-center justify-center'} ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${className}`}
      style={{ height: '100%' }} // 높이를 100%로 설정하여 중앙 정렬 가능
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
        className={`w-5 h-5 inline-block border rounded-md transition-all duration-200 items-center justify-center ${
          disabled && checked
            ? 'bg-gray-200 border-gray-200'
            : checked
              ? 'bg-black border-black'
              : disabled
                ? 'border-gray-200 opacity-50'
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
      {label && <span className="ml-2 peer-disabled:text-gray-200">{label}</span>}
    </label>
  )
}

export default CheckBox
