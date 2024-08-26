'use client'

import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from '@/components/ui/accordion'
import { Triangle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import * as Babel from '@babel/standalone'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

export default function Accordianpage() {
  const [code1, setCode1] = useState(`<>
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
    </>`)

  const [code2, setCode2] = useState(`<> 
<div className="mt-10">
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
          </div>
</>`)

  const [code3, setCode3] = useState(`<>
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
</>`)

  const [code4, setCode4] = useState(`<> 
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
</>`)
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
      if (error instanceof Error) {
        // console.log('Error rendering component:', error.message, error.stack)
        setComponent(
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionSummary>Error</AccordionSummary>
              <AccordionDetails>Content for Error</AccordionDetails>
            </AccordionItem>
          </Accordion>,
        )
      } else {
        // console.error('Unknown error occurred:', error)
        setComponent(
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionSummary>Unknown Error</AccordionSummary>
              <AccordionDetails>Content for Unknown Error</AccordionDetails>
            </AccordionItem>
          </Accordion>,
        )
      }
    }
  }
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbText>Accordion</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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
        <ComponentExplain
          variant="
        DefaultExpanded &disable"
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        description="다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다."
        props={[
          {
            prop: 'title',
            type: 'string',
            default: '',
            description: '컴포넌트의 제목을 지정할 때 사용됩니다.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '컴포넌트에 CSS 클래스를 추가하여 스타일을 지정하는 데 사용됩니다.',
          },
          {
            prop: 'btn',
            type: '() => void',
            default: '',
            description: '버튼 클릭 시 실행될 함수를 정의합니다.',
          },
          {
            prop: 'btnMsg',
            type: 'string',
            default: '',
            description: '버튼에 표시될 텍스트를 지정합니다.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: '',
            description: '표시될 아이콘을 지정합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="Child"
        description="Child로 전달되는 내용은 <Alert> 컴포넌트가 사용자에게 표시할 주된 메시지입니다."
        props={[
          {
            prop: 'child',
            type: 'string',
            default: '',
            description: '제목 아래에 표시되어 더 자세한 내용을 제공합니다.',
          },
        ]}
      />
    </>
  )
}
