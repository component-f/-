'use client'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
} from '@/components/common/component'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import useRenderComponent from '@/hooks/useRenderComponent'
import { TComponentMap } from '@/types/componentMap'

const TextareaDefaultExample = () => {
  const [defaultCode, setDefaultCode] = useState<string>(`
    <Textarea placeholder="type your message here." className="w-[350px]" />
  `)

  const { renderedComponent } = useRenderComponent(defaultCode, setDefaultCode, { Textarea } as TComponentMap)

  return (
    <Component>
      <ComponentExplain
        title="Textarea"
        description="Displays a form textarea or a component that looks like a textarea."
      />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
      </ComponentContainer>
    </Component>
  )
}

const TextareaVariantExample = () => {
  const [variantCode, setVariantCode] = useState<string>(`
    <Textarea
      placeholder="type your message here."
      className="border-sky-500 focus-visible:ring-sky-500 placeholder:text-sky-500 text-sky-500 w-[350px]"
    />
  `)

  const { renderedComponent } = useRenderComponent(variantCode, setVariantCode, { Textarea } as TComponentMap)

  return (
    <Component>
      <ComponentExplain variant="Variant" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={variantCode} setCode={setVariantCode} />
      </ComponentContainer>
    </Component>
  )
}

const TextareaCounterExample = () => {
  const [counterCode, setCounterCode] = useState<string>(`
    <div className="flex flex-col gap-4">
      <Textarea
        placeholder="type your message here."
        className="w-[350px]"
        maxLength={10}
      />
      <Textarea
        placeholder="type your message here."
        className="w-[350px]"
        maxLength={50}
        counterClassName="text-blue-400"
      />
    </div>
  `)

  const { renderedComponent } = useRenderComponent(counterCode, setCounterCode, { Textarea } as TComponentMap)

  return (
    <Component>
      <ComponentExplain variant="Counter" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={counterCode} setCode={setCounterCode} />
      </ComponentContainer>
    </Component>
  )
}

const TextareaDisabledExample = () => {
  const [disabledCode, setDisabledCode] = useState<string>(`
    <Textarea
      placeholder="type your message here."
      disabled
    />
  `)

  const { renderedComponent } = useRenderComponent(disabledCode, setDisabledCode, { Textarea } as TComponentMap)

  return (
    <Component>
      <ComponentExplain variant="Disabled" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={disabledCode} setCode={setDisabledCode} />
      </ComponentContainer>
    </Component>
  )
}

export { TextareaDefaultExample, TextareaVariantExample, TextareaCounterExample, TextareaDisabledExample }
