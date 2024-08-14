import React from 'react'

interface RadioProps {
  label: string
  name: string
  value: string
}

const Radio: React.FC<RadioProps> = ({ label, name, value }) => {
  return (
    <label className="inline-flex items-center mt-3 mb-2 mr-4">
      <input type="radio" name={name} value={value} className="h-5 w-5" />
      <span className="ml-2 text-black">{label}</span>
    </label>
  )
}

export default Radio
