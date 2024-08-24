'use client'

import React, { useState, useEffect } from 'react'
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
import Textarea from '@/components/ui/textarea'
import Alert from '@/components/ui/alert'
import { Ban } from 'lucide-react'

export default function TextareaPage() {
  const [code1, setCode1] = useState(`
    <>
      <Textarea placeholder="type your message here." />
    </>
  `)
  const [code2, setCode2] = useState(`
    <>
      <Textarea placeholder="type your message here." />
    </>
    `)
  const [code3, setCode3] = useState(`
    <Textarea placeholder="type your message here." disabled />
  `)
  const [code4, setCode4] = useState(`
    <div className="flex flex-col space-y-2">
      <Textarea placeholder="type your message here." />
      <button className="border border-border p-2 w-[500px] rounded-lg bg-foreground text-background">
        Send message
      </button>
    </div>
  `)
  const [code5, setCode5] = useState(`
    <div className="flex flex-col space-y-2">
      <Textarea placeholder="type your message here." />
      <button className="border border-border p-2 w-[500px] rounded-lg bg-foreground text-background">
        Send message
      </button>
    </div>
  `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)
  const [RenderedComponent4, setRenderedComponent4] = useState<JSX.Element | null>(null)
  const [RenderedComponent5, setRenderedComponent5] = useState<JSX.Element | null>(null)

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
  useEffect(() => {
    transformAndSetComponent(code5, setRenderedComponent5)
  }, [code5])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Textarea', `return ${transformedCode};`)

      const element = Component(React, Textarea, Ban)

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(
        <Alert className="w-1/3 bg-red-500 text-white" title="오류" icon={<Ban size={35} />}>
          컴포넌트를 렌더링 하는 데 실패했습니다.
        </Alert>,
      )
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
            <BreadcrumbText>Textarea</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain
          title="Textarea"
          description="텍스트 영역이나 텍스트 영역처럼 보이는 구성 요소를 표시합니다."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Custom" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Custom2" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>
      <Component>
        <ComponentExplain variant="Custom3" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>
      <Component>
        <ComponentExplain variant="Custom4" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent5}</ComponentExample>
          <ComponentExampleCode code={code5} setCode={setCode5} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        description="다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다."
        props={[
          {
            prop: 'ref',
            type: '',
            default: '',
            description: '',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '컴포넌트에 CSS 클래스를 추가하여 스타일을 지정하는 데 사용됩니다.',
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
