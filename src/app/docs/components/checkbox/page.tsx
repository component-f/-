'use client'

import React, { useState } from 'react'
import CheckBox from '@/components/ui/checkbox'

export default function CheckboxPage() {
  const [checkboxValue, setCheckboxValue] = useState<string[]>([])
  const [checkboxValue2, setCheckboxValue2] = useState<string[]>([])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCheckboxValue((prevOptions) =>
      prevOptions.includes(value) ? prevOptions.filter((option) => option !== value) : [...prevOptions, value],
    )
  }

  const handleCheckboxChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCheckboxValue2((prevOptions) =>
      prevOptions.includes(value) ? prevOptions.filter((option) => option !== value) : [...prevOptions, value],
    )
  }

  return (
    <div className="flex flex-col items-start justify-start min-h-screen py-2 px-4">
      <h1 className="text-3xl font-bold mb-2">CheckBox</h1>
      <p>체크 박스</p>
      <h2 className="text-2xl font-semibold border-b py-2 mt-2 mb-4">Examples</h2>
      <h3 className="text-xl font-semibold mb-1">Select options</h3>
      <form className="mt-4 w-full max-w-xs">
        <div className="flex">
          <CheckBox
            label="Option 1"
            name="options"
            value="option1"
            checked={checkboxValue.includes('option1')}
            onChange={handleCheckboxChange}
          />
          <CheckBox
            label="Option 2"
            name="options"
            value="option2"
            checked={checkboxValue.includes('option2')}
            onChange={handleCheckboxChange}
          />
          <CheckBox
            label="Option 3"
            name="options"
            value="option3"
            checked={checkboxValue.includes('option3')}
            onChange={handleCheckboxChange}
            disabled={true}
          />
        </div>
      </form>

      <form className="mt-4 w-full max-w-xs">
        <h1 className="text-xl font-semibold mb-4">Select options</h1>
        <div>
          <CheckBox
            label="Option 1"
            name="options1"
            value="option1-1"
            checked={checkboxValue2.includes('option1-1')}
            onChange={handleCheckboxChange2}
          />
          <CheckBox
            label="Option 2"
            name="options1"
            value="option1-2"
            checked={checkboxValue2.includes('option1-2')}
            onChange={handleCheckboxChange2}
          />
          <CheckBox
            label="Option 3"
            name="options1"
            value="option1-3"
            //checked={checkboxValue2.includes('option1-3')}
            checked={true}
            onChange={handleCheckboxChange2}
            disabled={true}
          />
        </div>
      </form>
    </div>
  )
}
