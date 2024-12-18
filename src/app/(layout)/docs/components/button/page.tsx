'use client'
import { Button } from '@/components/ui/button'
import { Delete, Send, Bell, ShoppingCart, Heart } from 'lucide-react'

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

export default function Buttonpage() {
  const [code1, setCode1] = useState(`
    <Button />
  `)
  const [code2, setCode2] = useState(`
    <div className="flex space-x-2">
      <Button variant="text"> Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button disabled>Disabled</Button>
    </div>
    `)

  const [code3, setCode3] = useState(`
    <div className="flex space-x-2">
      <Button className="text-red-500">
        Error
      </Button>
      <Button variant="contained" className="bg-red-500">
        Error
      </Button>
      <Button variant="outlined" className="text-red-500 border-red-500">
        Error
      </Button>
    </div>
    `)

  const [code4, setCode4] = useState(`
    <div className="flex space-x-2">
      <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<Send size={16} />}>
        Send
      </Button>
    </div>
    `)

  const [code5, setCode5] = useState(`
    <div className="flex space-x-2">
      <Button className="text-red-500">
        <Bell />
      </Button>
      <Button variant="contained" className="bg-red-500">
        Error
      </Button>
      <Button variant="outlined" className="text-red-500 border-red-500" startIcon={<Delete />}>
        Delete
      </Button>
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

      const Component = new Function(
        'React',
        'Button',
        'FolderIcon',
        `Delete`,
        `Send`,
        `Bell`,
        `ShoppingCart`,
        `Heart`,
        `return ${transformedCode};`,
      )

      const element = Component(React, Button, Delete, Send, Bell, ShoppingCart, Heart)

      setComponent(element)
    } catch (error) {
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }
  return (
    <>
      <Component>
        <ComponentExplain
          title="Button"
          description="Buttons allow users to take actions, and make choices, with a single tap."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Variant & Disable" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Color" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Button with Icons" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Icons" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent5}</ComponentExample>
          <ComponentExampleCode code={code5} setCode={setCode5} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Button"
        description="the properties of the button component that the user can interact with."
        props={[
          {
            prop: 'variant',
            type: `'text' | 'contained' | 'outlined'`,
            default: `'text'`,
            description: 'Specifies the style variant for the button.',
          },
          {
            prop: 'startIcon',
            type: 'React.ReactNode',
            default: '',
            description: 'The icon to display at the beginning of the button.',
          },
          {
            prop: 'endIcon',
            type: 'React.ReactNode',
            default: '',
            description: 'The icon to display at the end of the button.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Contains text or elements that will be displayed inside the button.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'CSS class for additional styling.',
          },
        ]}
      />
    </>
  )
}
