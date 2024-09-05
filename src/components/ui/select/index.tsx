import React, { useState, useEffect } from 'react'

interface Option {
  label: string
  value: string
}

interface SelectProps {
  options: Option[]
  onSelect: (value: string) => void
  className?: string
  defaultSelected?: string
}

const Select: React.FC<SelectProps> = ({ options, onSelect, className, defaultSelected }) => {
  const [selectedValue, setSelectedValue] = useState(defaultSelected || options[0].value)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (defaultSelected) {
      setSelectedValue(defaultSelected)
    }
  }, [defaultSelected])

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
    onSelect(value)
  }

  return (
    <div className={`relative inline-block w-64 ${className}`}>
      <button
        className="w-full px-4 py-2 text-left border rounded-md shadow-sm ring-offset-background  focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-ring  text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find((option) => option.value === selectedValue)?.label}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor" stroke="none">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 border rounded-md shadow-lg">
          <ul className="py-1 text-sm">
            {options.map((option) => (
              <li
                key={option.value}
                className={`cursor-pointer px-4 py-2 ${
                  option.value === selectedValue ? 'bg-gray-200' : ''
                } hover:bg-accent hover:text-accent-foreground`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { Select }
