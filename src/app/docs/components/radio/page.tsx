'use client'

import Radio from '@/components/ui/radio'
import React from 'react'

export default function RadioPage() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen py-2 px-4">
      <h1 className="text-3xl font-bold mb-2">Radio</h1>
      <p>라디오 버튼</p>
      <h2 className="text-2xl font-semibold border-b py-2 mt-2">Examples</h2>
      <h3 className="text-xl font-semibold py-3">Gender</h3>
      <form className="w-full">
        <div className="flex">
          <Radio label="Female" name="options" value="Female" />
          <Radio label="Male" name="options" value="Male" />
          <Radio label="Other" name="options" value="Other" />
        </div>
      </form>
      <h4 className="text-xl font-semibold py-5">Gender</h4>
    </div>
  )
}
