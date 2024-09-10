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
        <ComponentExplain
          title="Table"
          description="A table component that displays data in a row and column structure."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain
          title="DataTable"
          description="A data table component that can display various data and columns."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Table"
        description="The properties of the Table component."
        props={[
          {
            prop: 'headers',
            type: 'string[]',
            default: '[]',
            description: 'Defines the column headers of the table.',
          },
          {
            prop: 'data',
            type: 'Array<Record<string, any>>',
            default: '[]',
            description: 'An array of objects containing data for each row.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '""',
            description: 'Additional classes that can be applied to the top-level div element of the table.',
          },
        ]}
      />
      <ComponentPropsTable
        title="DataTable"
        description="The properties of the DataTable component."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '""',
            description: 'Additional classes that can be applied to the top-level div element of the data table.',
          },
          {
            prop: 'data',
            type: 'Array<Record<string, any>>',
            default: '[]',
            description: 'The array of data to be displayed in the table.',
          },
          {
            prop: 'columns',
            type: 'Array<{ header: string, accessor: keyof T }>',
            default: '[]',
            description: 'An array defining the headers and accessors of the columns.',
          },
          {
            prop: 'onSelectedRowsChange',
            type: '(selectedRows: T[]) => void',
            default: 'undefined',
            description: 'Callback function that is triggered when the selected rows change.',
          },
        ]}
      />
    </>
  )
}
