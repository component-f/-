'use client'

import Radio from '@/components/ui/radio'
import React, { useState } from 'react'

export default function RadioPage() {
  const [radioValue, setRadioValue] = useState('Female')
  const [radioValue2, setRadioValue2] = useState('')

  return (
    <div className="items-start justify-start min-h-screen py-2 px-4">
      <h1 className="text-3xl font-bold mb-2">Radio</h1>
      <p>라디오 버튼</p>
      <h2 className="text-2xl font-semibold border-b py-2 mt-2">Examples</h2>
      <h3 className="text-xl font-semibold py-3">Gender</h3>
      <form className="w-full max-w-xs">
        <div className="flex">
          <Radio
            label="Female"
            name="gender"
            value={'Female'}
            onChange={() => setRadioValue('Female')}
            defaultChecked
          />
          <Radio label="Male" name="gender" value={'Male'} onChange={() => setRadioValue('Male')} />
          <Radio label="Other" name="gender" value={'Other'} onChange={() => setRadioValue('Other')} />
        </div>
      </form>
      <h4 className="text-xl font-semibold py-5">Gender</h4>
      <form className="flex flex-col">
        <div>
          <Radio label="Female" name="gender1" value={'Female'} onChange={() => setRadioValue2('Female')} />
          <Radio label="Male" name="gender1" value={'Male'} onChange={() => setRadioValue2('Male')} />
          <Radio
            label="Other"
            name="gender1"
            value={'Other'}
            disabled={true}
            onChange={() => setRadioValue2('Other')}
          />
        </div>
      </form>
    </div>
  )
}
