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
      onSelect={value => console.log('Selected:', value)}
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
      onSelect={value => console.log('Selected:', value)}
      defaultSelected="2"
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
        <ComponentExplain variant="defaultSelected" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Select"
        description="The properties of the Select component."
        props={[
          {
            prop: 'options',
            type: '{ label: string, value: string }[]',
            default: '[]',
            description: 'The list of options to display in the dropdown.',
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
            default: 'Value of the first option',
            description:
              'Sets the value of the option that is selected by default when the component is first rendered.',
          },
        ]}
      />
    </>
  )
}
