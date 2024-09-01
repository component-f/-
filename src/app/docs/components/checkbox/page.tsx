'use client'

import CheckBox from '@/components/ui/checkbox'
import React, { useEffect, useState } from 'react'
import * as Babel from '@babel/standalone'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

export default function CheckBoxPage() {
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]) //체크박스 value checked용
  const [checkboxValue2, setCheckboxValue2] = useState<string[]>([]) //체크박스2 value checked용

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

  const [code1, setCode1] = useState(`
    <form className="mt-4 w-full max-w-xs">
        <h1 className="text-xl font-semibold mb-4">Select options</h1>
        <div>
          <CheckBox
            label="Option 1"
            name="options"
            value="option1-1"
            checked={checkboxValue.includes('option1-1')}
            onChange={handleCheckboxChange}
          />
          <CheckBox
            label="Option 2"
            name="options"
            value="option1-2"
            checked={checkboxValue.includes('option1-2')}
            onChange={handleCheckboxChange}
          />
          <CheckBox
            label="Option 3"
            name="options"
            value="option1-3"
            checked={true}
            onChange={handleCheckboxChange}
            disabled={true}
          />
        </div>
      </form>
      `)

  const [code2, setCode2] = useState(`
    <form className="mt-4 w-full max-w-xs">
      <h1 className="text-xl font-semibold mb-1">Select options</h1>
      <div className="flex">
        <CheckBox
          label="Option 1"
          name="options1"
          value="option2-1"
          checked={checkboxValue2.includes('option2-1')}
          onChange={handleCheckboxChange2}
        />
        <CheckBox
          label="Option 2"
          name="options1"
          value="option2-2"
          checked={checkboxValue2.includes('option2-2')}
          onChange={handleCheckboxChange2}
        />
        <CheckBox
          label="Option 3"
          name="options1"
          value="option2-3"
          checked={checkboxValue2.includes('option2-3')}
          onChange={handleCheckboxChange2}
          disabled={true}
        />
      </div>
    </form>`)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1])

  useEffect(() => {
    transformAndSetComponent(code2, setRenderedComponent2)
  }, [code2])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      if (transformedCode) {
        const Component = new Function(
          'React',
          'CheckBox',
          'checkboxValue',
          'checkboxValue2',
          'handleCheckboxChange',
          'handleCheckboxChange2',
          `return ${transformedCode};`,
        )

        const element = Component(
          React,
          CheckBox,
          checkboxValue,
          checkboxValue2,
          handleCheckboxChange,
          handleCheckboxChange2,
        )

        setComponent(element)
      }
    } catch (error) {
      console.error('Error transforming code:', error)
    }
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbText>Checkbox</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain
          title="Checkbox"
          description="사용자가 선택하거나 해제하여 특정 옵션을 활성화하거나 비활성화할 수 있는 상호작용 가능한 요소입니다."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="가로 정렬 및 disabled" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Checkbox"
        description="라디오 버튼의 체크나 그룹 정보를 표시하기 위한 Radio 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'label',
            type: 'string',
            default: 'null',
            description: 'Checkbox 컴포넌트 옆에 표시되는 텍스트입니다.',
          },
          {
            prop: 'name',
            type: 'string',
            default: 'null',
            description: '체크박스의 그룹화 및 식별에 사용됩니다.',
          },
          {
            prop: 'value',
            type: 'string',
            default: 'null',
            description: '체크박스의 값입니다.',
          },
          {
            prop: `checked`,
            type: `boolean`,
            default: `false`,
            description: '체크박스의 체크 상태를 나타내며, 상태를 제어합니다.',
          },
          {
            prop: 'onChange',
            type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
            default: 'undefined',
            description: '체크박스 상태가 변경될 때 호출되는 콜백 함수입니다.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: '체크박스를 비활성화할지 여부를 결정합니다.',
          },
        ]}
      />
    </>
  )
}
