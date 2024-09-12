'use client'

import React, { useState, useEffect } from 'react'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { Textarea } from '@/components/ui/textarea'
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'

export default function TextareaPage() {
  const [defaultCode, setDefaultCode] = useState(`
    <Textarea placeholder="type your message here." className="w-[350px]" />
  `)
  const [variantCode, setVariantCode] = useState(`
    <Textarea
      placeholder="type your message here."
      className="border-sky-500 focus-visible:ring-sky-500 placeholder:text-sky-500 text-sky-500 w-[350px]"
    />
    `)
  const [counterCode, setCounterCode] = useState(`
    <div className="flex flex-col gap-4">
      <Textarea placeholder="type your message here." className="w-[350px]" maxLength={10} />
      <Textarea placeholder="type your message here." className="w-[350px]" maxLength={50} counterClassName="text-black" counterClassName="text-blue-400"/>
    </div>
    `)
  const [disabledCode, setDisabledCode] = useState(`
    <Textarea placeholder="type your message here." className="w-[400px]" disabled />
  `)
  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)
  const [RenderedComponent4, setRenderedComponent4] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(defaultCode, setRenderedComponent1, { Textarea })
  }, [defaultCode])
  useEffect(() => {
    transformAndSetComponent(variantCode, setRenderedComponent2, { Textarea })
  }, [variantCode])
  useEffect(() => {
    transformAndSetComponent(counterCode, setRenderedComponent3, { Textarea })
  }, [counterCode])
  useEffect(() => {
    transformAndSetComponent(disabledCode, setRenderedComponent4, { Textarea })
  }, [disabledCode])

  return (
    <>
      <Component>
        <ComponentExplain
          title="Textarea"
          description="Displays a form textarea or a component that looks like a textarea."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Variant" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={variantCode} setCode={setVariantCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Counter" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={counterCode} setCode={setCounterCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Disabled" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={disabledCode} setCode={setDisabledCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Textarea"
        description="A textarea component used for capturing user input."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Adds custom Tailwind CSS classes for styling the textarea.',
          },
          {
            prop: 'ref',
            type: 'React.RefObject<HTMLTextAreaElement>',
            default: '',
            description: 'Used to pass a reference to the textarea.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the textarea, hiding the cursor.',
          },
          {
            prop: 'placeholder',
            type: 'string',
            default: '',
            description: 'Provides a hint to the user about what to input.',
          },
          {
            prop: 'value',
            type: 'string | number | readonly string[]',
            default: '',
            description: 'Sets the current value of the textarea.',
          },
          {
            prop: 'maxLength',
            type: 'number',
            default: 'undefined',
            description: 'Limits the maximum number of characters allowed in the textarea.',
          },
          {
            prop: 'counterClassName',
            type: 'string',
            default: 'text-gray-500',
            description: 'Adds a CSS class for customizing the character counter.',
          },
        ]}
      />
    </>
  )
}
