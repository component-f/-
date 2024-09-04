'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CheckBox from '@/components/ui/checkbox'
import { useState } from 'react'

export default function Todo() {
  // 체크된 상태를 관리하는 useState 훅
  const [checkboxValue, setCheckboxValue] = useState<string[]>(['option1-5', 'option1-6']) // 기본적으로 마지막 2개가 체크됨

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCheckboxValue((prevOptions) =>
      prevOptions.includes(value) ? prevOptions.filter((option) => option !== value) : [...prevOptions, value],
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-col justify-between space-y-1.5 p-6">
        <CardTitle className="text-xl font-semibold leading-none tracking-tight">To-do</CardTitle>
        <CardDescription>Stay on top of your daily tasks.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="mt-4 w-full max-w-xs">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 w-full">
              <CheckBox
                label="Respond to comment #384 from Travis Ross"
                name="options"
                value="option1-1"
                checked={checkboxValue.includes('option1-1')}
                onChange={handleCheckboxChange}
                className={checkboxValue.includes('option1-1') ? 'line-through' : ''}
              />
            </div>

            <div className="flex items-center space-x-2">
              <CheckBox
                label="Invite Acme Co. team to Slack"
                name="options"
                value="option1-2"
                checked={checkboxValue.includes('option1-2')}
                onChange={handleCheckboxChange}
                className={checkboxValue.includes('option1-2') ? 'line-through' : ''}
              />
            </div>

            <div className="flex items-center space-x-2">
              <CheckBox
                label="Create a report requested by Danilo Sousa"
                name="options"
                value="option1-3"
                checked={checkboxValue.includes('option1-3')}
                onChange={handleCheckboxChange}
                className={checkboxValue.includes('option1-3') ? 'line-through' : ''}
              />
            </div>

            <div className="flex items-center space-x-2">
              <CheckBox
                label="Review support request #85"
                name="options"
                value="option1-4"
                checked={checkboxValue.includes('option1-4')}
                onChange={handleCheckboxChange}
                className={checkboxValue.includes('option1-4') ? 'line-through' : ''}
              />
            </div>

            <div className="flex items-center space-x-2">
              <CheckBox
                label="Close Q2 finances"
                name="options"
                value="option1-5"
                checked={checkboxValue.includes('option1-5')}
                onChange={handleCheckboxChange}
                className={checkboxValue.includes('option1-5') ? 'line-through' : ''}
              />
            </div>

            <div className="flex items-center space-x-2">
              <CheckBox
                label="Review invoice #3456"
                name="options"
                value="option1-6"
                checked={checkboxValue.includes('option1-6')}
                onChange={handleCheckboxChange}
                className={checkboxValue.includes('option1-6') ? 'line-through' : ''}
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
