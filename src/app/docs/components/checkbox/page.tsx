'use client'

import CheckBox from '@/components/ui/checkbox'
import React, { useEffect, useState } from 'react'
import * as Babel from '@babel/standalone'
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
  const [checkboxValue3, setCheckboxValue3] = useState<string[]>([]) //체크박스3 value checked용

  //체크박스 이벤트 핸들러
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
  const handleCheckboxChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCheckboxValue3((prevOptions) =>
      prevOptions.includes(value) ? prevOptions.filter((option) => option !== value) : [...prevOptions, value],
    )
  }

  // 디폴트 체크박스 (세로정렬)
  const [code1, setCode1] = useState(`
    <form className="mt-4 w-full max-w-xs">
      <h1 className="text-xl font-semibold mb-4">Select options</h1>
      <div>
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
        />
      </div>
    </form>
    `)

  // 가로정렬
  const [code2, setCode2] = useState(`
    <form className="mt-4 w-full max-w-xs">
      <h1 className="text-xl font-semibold mb-4">Select options</h1>
      <div className="flex">
        <CheckBox
          label="Option 1"
          name="options"
          value="option1"
          checked={checkboxValue2.includes('option1')}
          onChange={handleCheckboxChange2}
        />
        <CheckBox
          label="Option 2"
          name="options"
          value="option2"
          checked={checkboxValue2.includes('option2')}
          onChange={handleCheckboxChange2}
        />
        <CheckBox
          label="Option 3"
          name="options"
          value="option3"
          checked={checkboxValue2.includes('option3')}
          onChange={handleCheckboxChange2}
        />
      </div>
    </form>
    `)

  //checked & disabled
  const [code3, setCode3] = useState(`
    <form className="mt-4 w-full max-w-xs">
      <h1 className="text-xl font-semibold mb-4">Select options</h1>
      <div>
        <CheckBox
          label="Option 1"
          name="options"
          value="option1"
          checked={checkboxValue3.includes('option1')}
          onChange={handleCheckboxChange3}
        />
        <CheckBox
          label="Option 2"
          name="options"
          value="option2"
          checked={checkboxValue3.includes('option2')}
          onChange={handleCheckboxChange3}
        />
        <CheckBox
          label="Option 3"
          name="options"
          value="option3"
          //checked={checkboxValue3.includes('option3')}
          checked={true}
          onChange={handleCheckboxChange3}
          disabled={true}
        />
      </div>
    </form>
    `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1, checkboxValue])

  useEffect(() => {
    transformAndSetComponent(code2, setRenderedComponent2)
  }, [code2, checkboxValue2])

  useEffect(() => {
    transformAndSetComponent(code3, setRenderedComponent3)
  }, [code3, checkboxValue3])

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
          'checkboxValue3',
          'handleCheckboxChange',
          'handleCheckboxChange2',
          'handleCheckboxChange3',
          `return ${transformedCode};`,
        )

        const element = Component(
          React,
          CheckBox,
          checkboxValue,
          checkboxValue2,
          checkboxValue3,
          handleCheckboxChange,
          handleCheckboxChange2,
          handleCheckboxChange3,
        )

        setComponent(element)
      }
    } catch (error) {
      console.error('Error transforming code:', error)
    }
  }

  return (
    <>
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
        <ComponentExplain variant="가로 정렬" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="checked & disabled" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
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
            prop: `defaultChecked`,
            type: `boolean`,
            default: `false`,
            description: '체크박스의 초기 체크 상태를 제어합니다.',
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
