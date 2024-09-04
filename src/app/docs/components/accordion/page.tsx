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
        <ComponentExplain title="Accordion" description="페이지에서 관련 콘텐츠 섹션을 표시하거나 숨길 수 있습니다." />
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
        description="페이지에서 관련 콘텐츠 섹션을 표시하거나 숨길 수 있는 아코디언 컴포넌트의 속성입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'AccordionItem 컴포넌트를 자식 요소로 포함합니다.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '아코디언에 추가적인 스타일을 지정하기 위한 CSS 클래스입니다.',
          },
          {
            prop: 'singleOpen',
            type: 'boolean',
            default: 'false',
            description: '단일 아코디언 아이템만 열릴 수 있도록 설정합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AccordionItem"
        description="아코디언 내부의 개별 아이템을 구성하는 컴포넌트의 속성입니다."
        props={[
          {
            prop: 'value',
            type: 'string',
            default: '',
            description: '각 아코디언 아이템을 식별하기 위한 고유한 값입니다.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'AccordionSummary와 AccordionDetails 컴포넌트를 자식 요소로 포함합니다.',
          },
          {
            prop: 'isOpen',
            type: 'boolean',
            default: 'false',
            description: '아이템이 열려 있는지를 나타냅니다.',
          },
          {
            prop: 'onToggle',
            type: '() => void',
            default: '',
            description: '아이템의 열림 또는 닫힘을 토글하는 함수입니다.',
          },
          {
            prop: 'defaultExpanded',
            type: 'boolean',
            default: 'false',
            description: '컴포넌트가 기본적으로 확장될지 여부를 설정합니다.',
          },
          {
            prop: 'disable',
            type: 'boolean',
            default: 'false',
            description: '아이템이 비활성화 상태인지 여부를 설정합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AccordionSummary"
        description="아코디언 아이템의 제목과 확장 아이콘을 포함하는 컴포넌트의 속성입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '아코디언 아이템의 제목이나 요약을 표시할 콘텐츠를 포함합니다.',
          },
          {
            prop: 'isOpen',
            type: 'boolean',
            default: 'false',
            description: '아코디언 아이템이 열려 있는지를 나타냅니다.',
          },
          {
            prop: 'onToggle',
            type: '() => void',
            default: '',
            description: '아코디언 아이템의 열림 또는 닫힘을 토글하는 함수입니다.',
          },
          {
            prop: 'expandIcon',
            type: 'ReactNode',
            default: '<ChevronDown />',
            description: '아코디언 요약 부분에 표시될 확장 아이콘을 지정합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AccordionDetails"
        description="아코디언 아이템의 세부 내용을 표시하는 컴포넌트의 속성입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '아코디언 아이템의 세부 내용을 포함합니다.',
          },
          {
            prop: 'isOpen',
            type: 'boolean',
            default: 'false',
            description: '아코디언 아이템이 열려 있는지를 나타냅니다.',
          },
        ]}
      />
    </>
  )
}
