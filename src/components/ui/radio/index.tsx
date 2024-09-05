import React from 'react'

interface RadioProps {
  label: string
  name: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
  disabled?: boolean
  className?: string
}

const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  onChange,
  defaultChecked = false,
  disabled = false,
  className,
}) => {
  return (
    <label className={`block peer mt-2 mr-4 ${disabled ? `cursor-not-allowed opacity-20` : ''} ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className={`peer form-radio h-5 w-5 ${disabled ? `cursor-not-allowed opacity-20` : ''}`}
      />
      <span className="ml-2 place-items-center">{label}</span>
    </label>
  )
}

export { Radio }
