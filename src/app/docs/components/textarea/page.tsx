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
        description="사용자 입력을 받기 위해 사용되는 텍스트 입력 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '""',
            description: '추가적인 Tailwind CSS 클래스를 적용하여 텍스트 영역의 스타일을 조정합니다.',
          },
          {
            prop: 'ref',
            type: 'React.RefObject<HTMLTextAreaElement>',
            default: 'null',
            description: '텍스트 영역의 참조를 전달할 때 사용됩니다.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: '텍스트 영역을 비활성화합니다. 비활성화된 경우 커서가 표시되지 않습니다.',
          },
          {
            prop: 'placeholder',
            type: 'string',
            default: '',
            description: '사용자에게 입력할 내용에 대한 힌트를 제공합니다.',
          },
          {
            prop: 'value',
            type: 'string | number | readonly string[]',
            default: '',
            description: '텍스트 영역의 현재 값을 설정합니다.',
          },
        ]}
      />
    </>
  )
}
