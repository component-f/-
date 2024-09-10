'use client'
import React, { useEffect, useState } from 'react'
import * as Babel from '@babel/standalone'
import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from '@/components/ui/accordion'
import { Triangle } from 'lucide-react'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

export default function AccordionPage() {
  const [code1, setCode1] = useState(`
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionSummary>Accordion 1</AccordionSummary>
        <AccordionDetails>Content for Accordion 1</AccordionDetails>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionSummary>Accordion 2</AccordionSummary>
        <AccordionDetails>Content for Accordion 2</AccordionDetails>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionSummary>Accordion 3</AccordionSummary>
        <AccordionDetails>Content for Accordion 3</AccordionDetails>
      </AccordionItem>
    </Accordion>
    `)

  const [code2, setCode2] = useState(`
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionSummary>Accordion 1</AccordionSummary>
        <AccordionDetails>Content for Accordion 1</AccordionDetails>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionSummary expandIcon={<Triangle className="text-red-500 " />}>Error</AccordionSummary>
        <AccordionDetails>Content for Error</AccordionDetails>
      </AccordionItem>
    </Accordion>
    `)

  const [code3, setCode3] = useState(`
    <Accordion singleOpen>
      <AccordionItem value="item-1">
        <AccordionSummary expandIcon={<Triangle className="text-red-500 " />}>Accordion 1</AccordionSummary>
        <AccordionDetails>Content for Accordion 1</AccordionDetails>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionSummary>Accordion 2</AccordionSummary>
        <AccordionDetails>Content for Accordion 2</AccordionDetails>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionSummary expandIcon={<Triangle className="text-green-500" />}>Accordion 3</AccordionSummary>
        <AccordionDetails>Content for Accordion 3</AccordionDetails>
      </AccordionItem>
    </Accordion>
    `)

  const [code4, setCode4] = useState(`
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionSummary expandIcon={<Triangle className="text-red-500 " />}>Accordion 1</AccordionSummary>
        <AccordionDetails>Content for Accordion 1</AccordionDetails>
      </AccordionItem>
      <AccordionItem value="item-2" defaultExpanded>
        <AccordionSummary>Accordion 2</AccordionSummary>
        <AccordionDetails>Content for Accordion 2</AccordionDetails>
      </AccordionItem>
      <AccordionItem value="item-3" disable>
        <AccordionSummary expandIcon={<Triangle className="text-green-500" />}>Accordion 3</AccordionSummary>
        <AccordionDetails>Content for Accordion 3</AccordionDetails>
      </AccordionItem>
    </Accordion>
    `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)
  const [RenderedComponent4, setRenderedComponent4] = useState<JSX.Element | null>(null)

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
        'Accordion',
        'AccordionItem',
        'AccordionSummary',
        'AccordionDetails',
        'Triangle',
        `return ${transformedCode};`,
      )

      const element = Component(React, Accordion, AccordionItem, AccordionSummary, AccordionDetails, Triangle)

      setComponent(element)
    } catch (error) {
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain
          title="Accordion"
          description="The Accordion component lets users show and hide sections of related content on a page."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="ExpandIcons" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="SingleOpen" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="DefaultExpanded & Disable" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Accordion"
        description="the properties of the accordion component that allows you to show or hide related content sections on the page."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the AccordionItem component as a child element.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'CSS class for additional styling.',
          },
          {
            prop: 'singleOpen',
            type: 'boolean',
            default: 'false',
            description: 'Sets that only a single accordion item can be opened.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AccordionItem"
        description="the properties of the components that make up the individual items inside the accordion"
        props={[
          {
            prop: 'value',
            type: 'string',
            default: '',
            description: 'A unique value to identify each accordion item.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the AccordionSummary and AccordionDetails components as child elements.',
          },
          {
            prop: 'isOpen',
            type: 'boolean',
            default: 'false',
            description: 'Indicates whether the item is open.',
          },
          {
            prop: 'onToggle',
            type: '() => void',
            default: '',
            description: 'This function toggles the opening or closing of an item.',
          },
          {
            prop: 'defaultExpanded',
            type: 'boolean',
            default: 'false',
            description: 'Sets whether the component will be expanded by default.',
          },
          {
            prop: 'disable',
            type: 'boolean',
            default: 'false',
            description: 'Sets whether the item is inactive.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AccordionSummary"
        description="the properties of the component, including the title and expansion icon of the accordion item."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Contains content to display the title or summary of the accordion item.',
          },
          {
            prop: 'isOpen',
            type: 'boolean',
            default: 'false',
            description: 'Indicates whether the accordion item is open.',
          },
          {
            prop: 'onToggle',
            type: '() => void',
            default: '',
            description: 'A function toggles the open or closed status of an accordion item.',
          },
          {
            prop: 'expandIcon',
            type: 'ReactNode',
            default: '<ChevronDown />',
            description: 'Specifies the expansion icon to be displayed in the accordion summary section.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AccordionDetails"
        description="the properties of the component that display the details of the accordion item."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Contains details of the accordion item.',
          },
          {
            prop: 'isOpen',
            type: 'boolean',
            default: 'false',
            description: 'Indicates whether the accordion item is open.',
          },
        ]}
      />
    </>
  )
}
