import React from 'react'

interface RadioProps {
  label: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
  disabled?: boolean
}

const Radio: React.FC<RadioProps> = ({ label, name, value, onChange, defaultChecked = false, disabled = false }) => {
  return (
    <label className={`block peer items-center mt-3 mb-2 mr-4 ${disabled ? `text-gray-200 cursor-not-allowed` : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="peer form-radio h-5 w-5"
      />
      <span className="ml-2">{label}</span>
    </label>
  )
}

export default Radio
