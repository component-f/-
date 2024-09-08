'use client'

import React from 'react'
import * as Babel from '@babel/standalone'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

/**
 * Label 컴포넌트 문서 페이지 컴포넌트
 */
export default function LabelPage() {
  const [defaultCode, setDefaultCode] = React.useState(`
  <div>
      <div className="flex items-center space-x-2">
          <input id="terms" className="peer" type="checkbox" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
  </div>
  `)
  const [disabledCode, setDisabledCode] = React.useState(`
  <div>
      <div className="flex items-center space-x-2">
          <input id="terms" className="peer" type="checkbox" disabled />
          <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
  </div>
  `)
  const [withInputCode, setWithInputCode] = React.useState(`
  <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
  </div>
  `)

  const [DefaultComponent, setDefaultComponent] = React.useState<JSX.Element | null>(null)
  const [DisabledComponent, setDisabledComponent] = React.useState<JSX.Element | null>(null)
  const [WithInputComponent, setWithInputComponent] = React.useState<JSX.Element | null>(null)

  React.useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent)
  }, [defaultCode])

  React.useEffect(() => {
    transformAndSetComponent(disabledCode, setDisabledComponent)
  }, [disabledCode])

  React.useEffect(() => {
    transformAndSetComponent(withInputCode, setWithInputComponent)
  }, [withInputCode])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Button', 'Label', 'Input', `return ${transformedCode};`)

      const element = Component(React, Button, Label, Input)

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain title="Label" description="컨트롤과 연관된 접근 가능한 레이블을 렌더링합니다." />
        <ComponentContainer>
          <ComponentExample>{DefaultComponent}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Disabled" />
        <ComponentContainer>
          <ComponentExample>{DisabledComponent}</ComponentExample>
          <ComponentExampleCode code={disabledCode} setCode={setDisabledCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="With Input" />
        <ComponentContainer>
          <ComponentExample>{WithInputComponent}</ComponentExample>
          <ComponentExampleCode code={withInputCode} setCode={setWithInputCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Label"
        description="컨트롤과 연관된 접근 가능한 레이블을 렌더링합니다."
        props={[
          {
            prop: 'htmlFor',
            type: 'string',
            default: '',
            description: '레이블이 연결된 요소의 ID입니다.',
          },
        ]}
      />
    </>
  )
}
