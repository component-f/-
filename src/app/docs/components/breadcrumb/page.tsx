'use client'

import React, { useState, useEffect } from 'react'
import Alert from '@/components/ui/alert'
import * as Babel from '@babel/standalone'
import { Ellipsis, Ban, Slash, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

export default function BreadcrumbPage() {
  const [showStatusBar1, setShowStatusBar1] = useState(false)
  const [showStatusBar2, setShowStatusBar2] = useState(false)

  const toggleStatusBar1 = () => {
    setShowStatusBar1((prevState) => !prevState)
  }
  const toggleStatusBar2 = () => {
    setShowStatusBar2((prevState) => !prevState)
  }

  const [code1, setCode1] = useState(`
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
            <BreadcrumbText>Breadcrumb</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
    `)
  const [code2, setCode2] = useState(`
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash size={13} className="-rotate-12" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash size={13} className="-rotate-12" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbText>Breadcrumb</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
    `)

  const [code3, setCode3] = useState(`
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="text-gray-500 hover:text-foreground hover:opacity-100" onClick={toggleStatusBar1}>
                  <Ellipsis size={15} />
                </Button>
              </DropdownMenuTrigger>
                <DropdownMenuContent showStatusBar={showStatusBar1} toggleStatusBar={toggleStatusBar1}>
                  <DropdownMenuItem href="/">Documentation</DropdownMenuItem>
                  <DropdownMenuItem href="/docs/components/alert">Themes</DropdownMenuItem>
                  <DropdownMenuItem href="/github">Github</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbText>Breadcrumb</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
    `)

  const [code4, setCode4] = useState(`
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="text-gray-500 hover:text-foreground hover:opacity-100" onClick={toggleStatusBar2}>
                  Component<ChevronDown size={20} />
                </Button>
              </DropdownMenuTrigger>
                <DropdownMenuContent showStatusBar={showStatusBar2} toggleStatusBar={toggleStatusBar2}>
                  <DropdownMenuItem href="/">Documentation</DropdownMenuItem>
                  <DropdownMenuItem href="/docs/components/alert">Themes</DropdownMenuItem>
                  <DropdownMenuItem href="/github">Github</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbText>Breadcrumb</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
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
  }, [code3, showStatusBar1])
  useEffect(() => {
    transformAndSetComponent(code4, setRenderedComponent4)
  }, [code4, showStatusBar2])

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
        'Breadcrumb',
        'BreadcrumbItem',
        'BreadcrumbList',
        'BreadcrumbLink',
        'BreadcrumbSeparator',
        'BreadcrumbText',
        'DropdownMenu',
        'DropdownMenuTrigger',
        'DropdownMenuContent',
        'DropdownMenuItem',
        'Button',
        'Ellipsis',
        'Ban',
        'Slash',
        'ChevronDown',
        'showStatusBar1',
        'showStatusBar2',
        'toggleStatusBar1',
        'toggleStatusBar2',
        `return ${transformedCode};`,
      )

      const element = Component(
        React,
        Breadcrumb,
        BreadcrumbItem,
        BreadcrumbList,
        BreadcrumbLink,
        BreadcrumbSeparator,
        BreadcrumbText,
        DropdownMenu,
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuItem,
        Button,
        Ellipsis,
        Ban,
        Slash,
        ChevronDown,
        showStatusBar1,
        showStatusBar2,
        toggleStatusBar1,
        toggleStatusBar2,
      )

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(
        <Alert className="w-1/3 bg-red-500 text-white" title="오류" icon={<Ban size={35} />}>
          컴포넌트를 렌더링 하는 데 실패했습니다.
        </Alert>,
      )
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
            <BreadcrumbText>Breadcrumb</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain title="Breadcrumb" description="빵부스러기" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="custom1" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="custom2" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="custom3" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Breadcrumb"
        description="페이지 탐색을 위한 Breadcrumb 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: 'null',
            description: 'Breadcrumb의 각 항목을 포함하는 콘텐츠를 전달합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbList"
        description="Breadcrumb 내에서 리스트를 구성하는 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: 'null',
            description: 'Breadcrumb 내에서 여러 항목을 리스트 형식으로 포함합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbItem"
        description="Breadcrumb 내의 각 항목을 나타내는 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: 'null',
            description: 'Breadcrumb의 각 항목에 해당하는 콘텐츠를 포함합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbLink"
        description="Breadcrumb 항목에 대한 링크를 제공하는 요소입니다."
        props={[
          {
            prop: 'href',
            type: 'string',
            default: 'null',
            description: '클릭 시 이동할 URL을 지정합니다.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: 'null',
            description: '링크 텍스트 또는 콘텐츠를 포함합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbSeparator"
        description="Breadcrumb 항목들 사이를 구분하는 구분자 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: 'null',
            description: '구분자 기호나 텍스트를 포함할 수 있습니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbText"
        description="Breadcrumb 내에서 현재 위치를 나타내는 텍스트 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: 'null',
            description: '현재 위치를 설명하는 텍스트를 포함합니다.',
          },
        ]}
      />
    </>
  )
}
