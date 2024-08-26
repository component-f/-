'use client'

import Switch from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
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

export default function Switchpage() {
  const [code1, setCode1] = useState(`<Switch />`)

  const [code2, setCode2] = useState(`<> 
<div className="flex items-center ">
            <Switch id="darkmode" />
            <Label htmlFor="darkmode" className="cursor-pointer ml-2">
              darkmode
            </Label>
          </div>
</>`)

  const [code3, setCode3] = useState(`<>
          <div className="flex items-center mr-2 ">
            <Switch id="checked" checked={true} />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              checked
            </Label>
          </div>
          <div className="flex items-center ">
            <Switch id="disabled" checked={false} disabled />
            <Label htmlFor="disabled" className="cursor-pointer ml-2 opacity-50">
              disabled
            </Label>
          </div>
</>`)

  const [code4, setCode4] = useState(`<> 
<div className="flex items-center ">
            <Switch id="checked" checked={true} className=" bg-blue-500" />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              color
            </Label>
          </div>
</>`)
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
      if (error instanceof Error) {
        // console.log('Error rendering component:', error.message, error.stack)
        setComponent(
          <div className="flex items-center ">
            <Switch id="checked" checked={true} className=" bg-red-500" />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              Error
            </Label>
          </div>,
        )
      } else {
        // console.error('Unknown error occurred:', error)
        setComponent(
          <div className="flex items-center ">
            <Switch id="checked" checked={true} className=" bg-red-500" />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              Unknown Error
            </Label>
          </div>,
        )
      }
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
            <BreadcrumbText>Switch</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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
        description="다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다."
        props={[
          {
            prop: 'title',
            type: 'string',
            default: '',
            description: '컴포넌트의 제목을 지정할 때 사용됩니다.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '컴포넌트에 CSS 클래스를 추가하여 스타일을 지정하는 데 사용됩니다.',
          },
          {
            prop: 'btn',
            type: '() => void',
            default: '',
            description: '버튼 클릭 시 실행될 함수를 정의합니다.',
          },
          {
            prop: 'btnMsg',
            type: 'string',
            default: '',
            description: '버튼에 표시될 텍스트를 지정합니다.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: '',
            description: '표시될 아이콘을 지정합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="Child"
        description="Child로 전달되는 내용은 <Alert> 컴포넌트가 사용자에게 표시할 주된 메시지입니다."
        props={[
          {
            prop: 'child',
            type: 'string',
            default: '',
            description: '제목 아래에 표시되어 더 자세한 내용을 제공합니다.',
          },
        ]}
      />
    </>
  )
}
