'use client'

import React, { useEffect, useState } from 'react'
import Select from '@/components/ui/select'
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

export default function SelectPage() {
  const [code1, setCode1] = useState(`
    <Select
      options={[
        { label: 'select 1', value: '1' },
        { label: 'select 2', value: '2' },
        { label: 'select 3', value: '3' }
      ]}
      onSelect={value => console.log('Selected:', value)}
      className="my-custom-class"
      defaultSelected="2"
    />
  `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Select', `return ${transformedCode};`)

      const element = Component(React, Select)

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
            <BreadcrumbText>Select</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain
          title="Select"
          description="사용자가 주어진 옵션 중 하나를 선택할 수 있는 드롭다운 선택 인터페이스 요소입니다."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Select"
        description="선택 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'options',
            type: '{ label: string, value: string }[]',
            default: '[]',
            description: '드롭다운에서 표시할 옵션 목록입니다.',
          },
          {
            prop: 'onSelect',
            type: '(value: string) => void',
            default: 'undefined',
            description: '선택된 값이 변경될 때 호출되는 콜백 함수입니다.',
          },
          {
            prop: 'className',
            type: 'string',
            default: 'undefined',
            description: '선택 컴포넌트의 추가 CSS 클래스를 지정합니다.',
          },
          {
            prop: 'defaultSelected',
            type: 'string',
            default: '첫 번째 옵션의 값',
            description: '컴포넌트가 처음 렌더링될 때 기본적으로 선택된 옵션의 값을 설정합니다.',
          },
        ]}
      />
    </>
  )
}
