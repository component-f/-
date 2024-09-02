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
import Textarea from '@/components/ui/textarea'
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'

export default function TextareaPage() {
  const [defaultCode, setDefaultCode] = useState(`
    <Textarea placeholder="type your message here." className="w-[500px]" />
  `)
  const [variantCode, setVariantCode] = useState(`
    <Textarea
      placeholder="type your message here."
      className="border-sky-500 focus:ring-sky-500 placeholder:text-sky-500 text-sky-500 w-[500px]"
    />
    `)
  const [disabledCode, setDisabledCode] = useState(`
    <Textarea placeholder="type your message here." disabled className="w-[500px]" />
  `)
  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(defaultCode, setRenderedComponent1, { Textarea })
  }, [defaultCode])
  useEffect(() => {
    transformAndSetComponent(variantCode, setRenderedComponent2, { Textarea })
  }, [variantCode])
  useEffect(() => {
    transformAndSetComponent(disabledCode, setRenderedComponent3, { Textarea })
  }, [disabledCode])

  return (
    <>
      <Component>
        <ComponentExplain
          title="Textarea"
          description="텍스트 영역이나 텍스트 영역처럼 보이는 구성 요소를 표시합니다."
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
        <ComponentExplain variant="Disabled" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={disabledCode} setCode={setDisabledCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Textarea"
        description="사용자 입력을 받기 위한 텍스트 영역 컴포넌트입니다."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '추가적인 Tailwind CSS 클래스를 적용하여 텍스트 영역의 스타일을 조정합니다.',
          },
          {
            prop: 'ref',
            type: 'React.RefObject<HTMLTextAreaElement>',
            default: '',
            description: '텍스트 영역의 참조를 전달할 때 사용됩니다.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: '텍스트 영역을 비활성화합니다. 비활성화된 경우 커서가 표시되지 않습니다.',
          },
          {
            prop: 'placeholder',
            type: 'string',
            default: '',
            description: '사용자에게 입력할 내용에 대한 힌트를 제공합니다.',
          },
          {
            prop: 'value',
            type: 'string | number | readonly string[]',
            default: '',
            description: '텍스트 영역의 현재 값을 설정합니다.',
          },
          {
            prop: 'onChange',
            type: '(event: React.ChangeEvent<HTMLTextAreaElement>) => void',
            default: 'undefined',
            description: '텍스트 영역의 값이 변경될 때 호출되는 콜백 함수입니다.',
          },
        ]}
      />
    </>
  )
}
