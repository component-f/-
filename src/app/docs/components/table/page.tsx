'use client'

import { Table } from '@/components/ui/table'
import { DataTable } from '@/components/ui/datatable'
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

  const [code2, setCode2] = useState(`
    <DataTable
      data={[
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Alice Smith', email: 'alice@example.com' },
      ]}
      columns={[
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
      ]}
    />
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

      const Component = new Function('React', 'Table', 'DataTable', `return ${transformedCode};`)

      const element = Component(React, Table, DataTable)

      setComponent(element)
    } catch (error) {
      console.error('Error transforming code:', error)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain title="Table" description="데이터를 행과 열의 구조로 표시하는 테이블 컴포넌트입니다." />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain
          title="DataTable"
          description="다양한 데이터와 컬럼을 표시할 수 있는 데이터 테이블 컴포넌트입니다."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
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
          {
            prop: 'className',
            type: 'string',
            default: '""',
            description: '테이블의 최상위 div 요소에 적용할 수 있는 추가 클래스입니다.',
          },
        ]}
      />
      <ComponentPropsTable
        title="DataTable"
        description="데이터 테이블 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'data',
            type: 'Array<Record<string, any>>',
            default: '[]',
            description: '테이블에 표시할 데이터 배열입니다.',
          },
          {
            prop: 'columns',
            type: 'Array<{ header: string, accessor: keyof T }>',
            default: '[]',
            description: '컬럼의 헤더와 접근자를 정의하는 배열입니다.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '""',
            description: '데이터 테이블의 최상위 div 요소에 적용할 수 있는 추가 클래스입니다.',
          },
        ]}
      />
    </>
  )
}
