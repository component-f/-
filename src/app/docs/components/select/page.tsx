'use client'

import React, { useEffect, useState } from 'react'
import { Select } from '@/components/ui/select'
import * as Babel from '@babel/standalone'
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
      onSelect={(value) => {value}}
    />
  `)
  //defaultSelected
  const [code2, setCode2] = useState(`
    <Select
      options={[
        { label: 'select 1', value: '1' },
        { label: 'select 2', value: '2' },
        { label: 'select 3', value: '3' }
      ]}
      onSelect={(value) => {value}}
      defaultSelected="2"
    />
  `)
  //description
  const [code3, setCode3] = useState(`
    <Select
      options={[
        { label: 'Viewer', value: 'viewer', description: 'Can view and comment.' },
        { label: 'Developer', value: 'developer', description: 'Can view, comment and edit.' },
        { label: 'Billing', value: 'billing', description: 'Can view, comment and manage billing.' },
        { label: 'Owner', value: 'owner', description: 'Admin-level access to all resources.' },
        { label: 'Member', value: 'member', description: 'Team member' }
      ]}
      onSelect={(value) => {value}}
    />
  `)
  //hidden
  const [code4, setCode4] = useState(`
    <Select
      options={[
        { label: 'Columns', value: 'columns', hidden: true },
        { label: 'Status', value: 'status' },
        { label: 'Email', value: 'email' },
        { label: 'Amount', value: 'amount' },
      ]}
      onSelect={(value) => {value}}
      defaultSelected="columns"
    />
  `)
  //disabled
  const [code5, setCode5] = useState(`
    <Select
      options={[
        { label: 'First Option', value: 'first' },
        { label: 'Second Option', value: 'second' },
        { label: 'Disabled Option', value: 'disable',
          description:"You can't click it, but you can set it as the default selected option.", disabled: true},
        { label: 'Final Option', value: 'final' },
      ]}
      onSelect={(value) => {value}}
      defaultSelected="disable"
    />
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

      const Component = new Function('React', 'Select', `return ${transformedCode};`)

      const element = Component(React, Select)

      setComponent(element)
    } catch (error) {
      console.error('Error transforming code:', error)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain
          title="Select"
          description="A dropdown selection interface element that allows users to choose one option from a given set."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="DefaultSelected" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Description" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Hidden" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Disabled" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent5}</ComponentExample>
          <ComponentExampleCode code={code5} setCode={setCode5} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Select"
        description="The properties of the Select component."
        props={[
          {
            prop: 'options',
            type: '{ label: string, value: string, description?: string, hidden?: boolean }[]',
            default: '[]',
            description:
              'The list of options to display in the dropdown. Each option can include a label, value, an optional description for additional details, and an optional hidden flag to exclude the option from the dropdown.',
          },
          {
            prop: 'onSelect',
            type: '(value: string) => void',
            default: 'undefined',
            description: 'Callback function called when the selected value changes.',
          },
          {
            prop: 'className',
            type: 'string',
            default: 'undefined',
            description: 'Specifies additional CSS classes for the Select component.',
          },
          {
            prop: 'defaultSelected',
            type: 'string',
            default: 'Value of the first non-hidden option',
            description:
              'Sets the value of the option that is selected by default when the component is first rendered.',
          },
          {
            prop: 'description',
            type: 'string',
            default: 'undefined',
            description: 'Optional description for the option, which is displayed under the label.',
          },
          {
            prop: 'hidden',
            type: 'boolean',
            default: 'false',
            description: 'If true, the option will not be displayed in the dropdown.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description:
              'If true, the option will be displayed but cannot be selected. But you can set it as the default selected option.',
          },
        ]}
      />
    </>
  )
}
