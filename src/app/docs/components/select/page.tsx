'use client'

import React from 'react'
import Select from '@/components/ui/select'

const SelectPage: React.FC = () => {
  const options = [
    { label: 'select 1', value: '1' },
    { label: 'select 2', value: '2' },
    { label: 'select 3', value: '3' },
  ]

  const handleSelect = (value: string) => {
    console.log('Selected:', value)
  }

  return (
    <div className="flex justify-start items-start h-screen pt-20">
      <Select options={options} onSelect={handleSelect} />
    </div>
  )
}

export default SelectPage
