'use client'

import React, { useState, useEffect } from 'react'
import { CircleCheckBig, Ban } from 'lucide-react'
import Alert from '@/components/ui/alert'
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

export default function AlertPage() {
  const [code1, setCode1] = useState(`
    <Alert className="w-1/3 bg-green-500 text-white" title="Success!" icon={<CircleCheckBig size={35} />}>
      작업이 성공적으로 완료되었습니다.
    </Alert>
    `)

  const [code2, setCode2] = useState(`
    <Alert className="w-1/3 bg-blue-500 text-white" title="Info" icon={<CircleCheckBig size={35} />}>
    추가 정보가 필요합니다.
    </Alert>
    `)

  const [code3, setCode3] = useState(`
    <Alert className="w-1/3 bg-red-500 text-white" title="꺄아악" icon={<Ban size={35} />}>
      오류입니다.
    </Alert>
  `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1])

  useEffect(() => {
    transformAndSetComponent(code2, setRenderedComponent2)
  }, [code2])

  useEffect(() => {
    transformAndSetComponent(code3, setRenderedComponent3)
  }, [code3])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Alert', 'CircleCheckBig', 'Ban', `return ${transformedCode};`)

      const element = Component(React, Alert, CircleCheckBig, Ban)

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
            <BreadcrumbText>Alert</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain title="Alert" description="사용자의 주의를 끌기 위한 콜아웃을 표시합니다." />
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

      <ComponentPropsTable
        title="Alert"
        description="경고 메시지나 정보 메시지를 표시하기 위한 Alert 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: 'null',
            description: 'Alert 컴포넌트의 추가적인 CSS 클래스를 지정합니다.',
          },
          {
            prop: 'title',
            type: 'string',
            default: 'null',
            description: 'Alert의 제목을 지정합니다.',
          },
          {
            prop: 'btn',
            type: '() => void',
            default: 'null',
            description: '버튼을 클릭했을 때 호출되는 함수입니다.',
          },
          {
            prop: 'btnMsg',
            type: 'string',
            default: 'null',
            description: '버튼에 표시될 메시지를 지정합니다.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: 'null',
            description: 'Alert의 왼쪽에 표시될 아이콘을 지정합니다.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: 'null',
            description: 'Alert에 표시될 메시지나 콘텐츠를 지정합니다.',
          },
        ]}
      />
    </>
  )
}
