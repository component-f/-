'use client'

import React from 'react'
import * as Babel from '@babel/standalone'

import { Input } from '@/components/ui/input'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
} from '@/components/common/component'
import { Label } from '@/components/ui/label'

/**
 * Input 컴포넌트 문서 페이지 컴포넌트
 */
export default function InputPage() {
  const [defaultCode, setDefaultCode] = React.useState(`
  <Input type="text" placeholder="placeholder" />
  `)
  const [withLabelCode, setWithLabelCode] = React.useState(`
  <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
  </div>
  `)
  const [fileCode, setFileCode] = React.useState(`
  <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
  </div>
  `)
  const [disabledCode, setDisabledCode] = React.useState(`
  <Input type="text" placeholder="placeholder" disabled/>
  
  `)

  const [DefaultComponent, setDefaultComponent] = React.useState<JSX.Element | null>(null)
  const [WithLabelComponent, setWithLabelComponent] = React.useState<JSX.Element | null>(null)
  const [DisabledComponent, setDisabledComponent] = React.useState<JSX.Element | null>(null)
  const [FileComponent, setFileComponent] = React.useState<JSX.Element | null>(null)

  React.useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent)
  }, [defaultCode])

  React.useEffect(() => {
    transformAndSetComponent(withLabelCode, setWithLabelComponent)
  }, [withLabelCode])

  React.useEffect(() => {
    transformAndSetComponent(fileCode, setFileComponent)
  }, [fileCode])

  React.useEffect(() => {
    transformAndSetComponent(disabledCode, setDisabledComponent)
  }, [disabledCode])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Input', 'Label', `return ${transformedCode};`)

      const element = Component(React, Input, Label)

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain
          title="Input"
          description="양식 입력 필드 또는 입력 필드처럼 보이는 구성 요소를 표시합니다."
        />
        <ComponentContainer>
          <ComponentExample>
            <div className="p-10 w-full  max-w-md">{DefaultComponent}</div>
          </ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="With Label" />
        <ComponentContainer>
          <ComponentExample>
            <div className="p-10 w-full  max-w-md">{WithLabelComponent}</div>
          </ComponentExample>
          <ComponentExampleCode code={withLabelCode} setCode={setWithLabelCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="File" />
        <ComponentContainer>
          <ComponentExample>
            <div className="p-10 w-full  max-w-md">{FileComponent}</div>
          </ComponentExample>
          <ComponentExampleCode code={fileCode} setCode={setFileCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Disabled" />
        <ComponentContainer>
          <ComponentExample>
            <div className="p-10 w-full  max-w-md">{DisabledComponent}</div>
          </ComponentExample>
          <ComponentExampleCode code={disabledCode} setCode={setDisabledCode} />
        </ComponentContainer>
      </Component>
    </>
  )
}
