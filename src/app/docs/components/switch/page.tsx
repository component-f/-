'use client'

import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
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

export default function Switchpage() {
  const [code1, setCode1] = useState(`<Switch />`)

  const [code2, setCode2] = useState(` 
    <div className="flex items-center ">
      <Switch id="darkmode" />
      <Label htmlFor="darkmode" className="cursor-pointer ml-2">
        darkmode
      </Label>
    </div>
    `)

  const [code3, setCode3] = useState(`
    <div className="flex items-center mr-2 ">
      <Switch id="checked" checked={true} />
      <Label htmlFor="checked" className="cursor-pointer ml-2 ">
        checked
      </Label>
    
      <Switch id="disabled" checked={false} disabled />
      <Label htmlFor="disabled" className="cursor-pointer ml-2 opacity-50">
        disabled
      </Label>
    </div>
    `)

  const [code4, setCode4] = useState(` 
    <div className="flex items-center ">
      <Switch id="color" checked={true} className="bg-blue-500" />
      <Label htmlFor="color" className="cursor-pointer ml-2 ">
        color
      </Label>
    </div>
    `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)
  const [RenderedComponent4, setRenderedComponent4] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1])

  useEffect(() => {
    transformAndSetComponent(code2, setRenderedComponent2)
  }, [code2])

  useEffect(() => {
    transformAndSetComponent(code3, setRenderedComponent3)
  }, [code3])

  useEffect(() => {
    transformAndSetComponent(code4, setRenderedComponent4)
  }, [code4])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Switch', 'Label', `return ${transformedCode};`)

      const element = Component(React, Switch, Label)

      setComponent(element)
    } catch (error) {
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain title="Switch" description="단일 설정의 상태를 켜거나 끕니다." />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Label" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Checked & disable" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain
          variant="
        color"
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Switch"
        description="사용자가 단일 설정을 켜거나 끌 수 있는 스위치 컴포넌트의 속성입니다."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '스위치의 스타일을 커스터마이즈하기 위해 추가되는 CSS 클래스입니다.',
          },
          {
            prop: 'id',
            type: 'string',
            default: '',
            description: '스위치와 레이블을 연결하기 위한 고유 식별자입니다.',
          },
          {
            prop: 'checked',
            type: 'boolean',
            default: 'false',
            description: '스위치가 체크되어 있는지 여부를 제어합니다.',
          },
          {
            prop: 'defaultChecked',
            type: 'boolean',
            default: 'false',
            description: '스위치의 초기 체크 상태를 설정합니다.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: '스위치가 비활성화되어 사용자 상호작용을 방지할지 여부를 설정합니다.',
          },
        ]}
      />
    </>
  )
}
