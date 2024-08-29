'use client'

import Table from '@/components/ui/table'
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

export default function TablePage() {
  const [code1, setCode1] = useState(`
    <Table
      headers={['table 1', 'table 2', 'table 3', 'table 4']}
      data={[
        { 'table 1': 'value 1', 'table 2': 'value 2', 'table 3': 'value 3', 'table 4': 'value 4' },
        { 'table 1': 'value 5', 'table 2': 'value 6', 'table 3': 'value 7', 'table 4': 'value 8' },
        { 'table 1': 'value 9', 'table 2': 'value 10', 'table 3': 'value 11', 'table 4': 'value 12' },
      ]}
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

      const Component = new Function('React', 'Table', `return ${transformedCode};`)

      const element = Component(React, Table)

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
            <BreadcrumbText>Table</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain title="Table" description="데이터를 행과 열의 구조로 표시하는 테이블 컴포넌트입니다." />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Table"
        description="테이블 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'headers',
            type: 'string[]',
            default: '[]',
            description: '테이블의 열 헤더를 정의합니다.',
          },
          {
            prop: 'data',
            type: 'Array<Record<string, any>>',
            default: '[]',
            description: '각 행의 데이터를 포함하는 객체 배열입니다.',
          },
        ]}
      />
    </>
  )
}
