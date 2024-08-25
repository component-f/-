'use client'

import React, { useState, useEffect } from 'react'
import Alert from '@/components/ui/alert'
import * as Babel from '@babel/standalone'
import { Ellipsis, Ban } from 'lucide-react'
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
  const [showStatusBar, setShowStatusBar] = useState(false)

  const toggleStatusBar = () => {
    setShowStatusBar((prevState) => !prevState)
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
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="text-gray-500 hover:text-foreground hover:opacity-100" onClick={toggleStatusBar}>
                  <Ellipsis size={15} />
                </Button>
              </DropdownMenuTrigger>
                <DropdownMenuContent showStatusBar={showStatusBar} toggleStatusBar={toggleStatusBar}>
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

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1])
  useEffect(() => {
    transformAndSetComponent(code2, setRenderedComponent2)
  }, [code2, showStatusBar])

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
        'showStatusBar',
        'toggleStatusBar',
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
        showStatusBar,
        toggleStatusBar,
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
