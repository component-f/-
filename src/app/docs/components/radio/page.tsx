'use client'

import Radio from '@/components/ui/radio'
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

export default function RadioPage() {
  // const [radioValue, setRadioValue] = useState('Female')
  // const [radioValue2, setRadioValue2] = useState('')
  // 본래 체크된 라디오 value를 불러오기 위해 넣은 useState
  // 코드를 코드러너에 넣자 인식이 불가, 주석처리

  const [code1, setCode1] = useState(`
    <form className="flex flex-col">
        <h1 className="text-xl font-semibold py-5">Gender</h1>
        <div>
          <Radio
            label="Female"
            name="gender1"
            value={'Female'}
          />
          <Radio
            label="Male"
            name="gender1"
            value={'Male'}
          />
          <Radio
            label="Other"
            name="gender1"
            value={'Other'}
            disabled={true}
          />
        </div>
      </form>
      `)

  const [code2, setCode2] = useState(`
      <form className="w-full max-w-xs">
        <h1 className="text-xl font-semibold py-3">Gender</h1>
        <div className="flex">
          <Radio
            label="Female"
            name="gender"
            value={'Female'}
            defaultChecked
          />
          <Radio
            label="Male"
            name="gender"
            value={'Male'}
          />
          <Radio
            label="Other"
            name="gender"
            value={'Other'}
          />
        </div>
      </form>
      `)

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

      const Component = new Function('React', 'Radio', `return ${transformedCode};`)

      const element = Component(React, Radio)

      setComponent(element)
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
            <BreadcrumbText>Radio</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain
          title="Radio"
          description="사용자가 주어진 옵션 중 하나만 선택할 수 있도록 하는 단일 선택 인터페이스 요소입니다."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="가로 정렬 및 defaultChecked" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Radio"
        description="라디오 버튼의 체크나 그룹 정보를 표시하기 위한 Radio 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: 'null',
            description: 'Radio 컴포넌트의 CSS 스타일을 지정할 수 있습니다.',
          },
          {
            prop: 'label',
            type: 'string',
            default: 'null',
            description: '라디오 버튼 옆에 표시될 텍스트입니다.',
          },
          {
            prop: 'name',
            type: 'string',
            default: 'null',
            description: '라디오 버튼의 그룹 이름입니다.',
          },
          {
            prop: 'value',
            type: 'string',
            default: 'null',
            description: '라디오 버튼의 값입니다.',
          },
          {
            prop: 'onChange',
            type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
            default: 'undefined',
            description: '라디오 버튼의 선택 상자가 변경될 때 호출되는 콜백 함수입니다.',
          },
          {
            prop: 'defaultChecked',
            type: 'boolean',
            default: 'false',
            description: '컴포넌트가 처음 렌더링될 때 기본적으로 선택된 상태로 표시할지를 결정합니다.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: '라디오 버튼을 비활성화할지 여부를 결정합니다.',
          },
        ]}
      />
    </>
  )
}
