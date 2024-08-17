import React from 'react'

interface RadioProps {
  label: string
  name: string
  value: string
  disabled?: boolean
}

const Radio: React.FC<RadioProps> = ({ label, name, value, disabled = false }) => {
  return (
    <label className={`inline-flex items-center mt-3 mb-2 mr-4 ${disabled ? 'cursor-not-allowed opacity-20' : ''}`}>
      <input type="radio" name={name} value={value} disabled={disabled} className="h-5 w-5" />
      <span className="ml-2">{label}</span>
    </label>
  )
}

export default Radio
