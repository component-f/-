'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Ellipsis, Slash, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/button'
import {
  Breadcrumb,
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
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'

export default function BreadcrumbPage() {
  const [showStatusBar1, setShowStatusBar1] = useState(false)
  const [showStatusBar2, setShowStatusBar2] = useState(false)
  const menuRef1 = useRef<HTMLDivElement>(null)
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const menuRef2 = useRef<HTMLDivElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)

  const toggleStatusBar1 = () => {
    setShowStatusBar1((prevState) => !prevState)
  }
  const toggleStatusBar2 = () => {
    setShowStatusBar2((prevState) => !prevState)
  }

  const [defaultCode, setDefaultCode] = useState(`
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbText>Breadcrumb</BreadcrumbText>
      </BreadcrumbList>
    </Breadcrumb>
    `)
  const [separatorCode, setSeparatorCode] = useState(`
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator separator={<Slash size={13} className="-rotate-12" />} />
        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        <BreadcrumbSeparator separator={<Slash size={13} className="-rotate-12" />} />
        <BreadcrumbText>Breadcrumb</BreadcrumbText>
      </BreadcrumbList>
    </Breadcrumb>
    `)

  const [collapsedCode, setCollapsedCode] = useState(`
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger toggleStatusBar={toggleStatusBar1} buttonRef={buttonRef1}>
            <Button className="text-gray-500 hover:text-foreground hover:opacity-100">
              <Ellipsis size={15} />
            </Button>
          </DropdownMenuTrigger>
            <DropdownMenuContent
              showStatusBar={showStatusBar1}
              toggleStatusBar={toggleStatusBar1}
              menuRef={menuRef1}
              buttonRef={buttonRef1}
            >
              <DropdownMenuItem href="/">Home</DropdownMenuItem>
              <DropdownMenuItem href="/docs/components/breadcrumb">Breadcrumb</DropdownMenuItem>
              <DropdownMenuItem href="/examples">Examples</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <BreadcrumbSeparator />
        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbText>Breadcrumb</BreadcrumbText>
      </BreadcrumbList>
    </Breadcrumb>
    `)

  const [dropdownCode, setDropdownCode] = useState(`
    <Breadcrumb>
      <BreadcrumbList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
          <DropdownMenu>
            <DropdownMenuTrigger toggleStatusBar={toggleStatusBar2} buttonRef={buttonRef2}>
              <div className="flex items-center text-gray-500">
                Components
                <ChevronDown size={20} />
              </div>
            </DropdownMenuTrigger>
              <DropdownMenuContent
                showStatusBar={showStatusBar2}
                toggleStatusBar={toggleStatusBar2}
                menuRef={menuRef2}
                buttonRef={buttonRef2}
              >
                <DropdownMenuItem href="/">Home</DropdownMenuItem>
                <DropdownMenuItem href="/docs/components/breadcrumb">Breadcrumb</DropdownMenuItem>
                <DropdownMenuItem href="/examples">Examples</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
        <BreadcrumbSeparator />
          <BreadcrumbText>Breadcrumb</BreadcrumbText>
      </BreadcrumbList>
    </Breadcrumb>
    `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)
  const [RenderedComponent4, setRenderedComponent4] = useState<JSX.Element | null>(null)

  const breadcrumbElement = { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbText }
  const dropdownElement = { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }
  const dependencies = {
    default: { ...breadcrumbElement },
    separator: { ...breadcrumbElement, ...dropdownElement, Slash },
    collapsed: {
      ...breadcrumbElement,
      ...dropdownElement,
      Button,
      menuRef1,
      buttonRef1,
      Ellipsis,
      showStatusBar1,
      toggleStatusBar1,
    },
    dropdown: {
      ...breadcrumbElement,
      ...dropdownElement,
      ChevronDown,
      menuRef2,
      buttonRef2,
      showStatusBar2,
      toggleStatusBar2,
    },
  }

  useEffect(() => {
    transformAndSetComponent(defaultCode, setRenderedComponent1, dependencies.default)
  }, [defaultCode])

  useEffect(() => {
    transformAndSetComponent(separatorCode, setRenderedComponent2, dependencies.separator)
  }, [separatorCode])

  useEffect(() => {
    transformAndSetComponent(collapsedCode, setRenderedComponent3, dependencies.collapsed)
  }, [collapsedCode, showStatusBar1])

  useEffect(() => {
    transformAndSetComponent(dropdownCode, setRenderedComponent4, dependencies.dropdown)
  }, [dropdownCode, showStatusBar2])

  return (
    <>
      <Component>
        <ComponentExplain title="Breadcrumb" description="현재 리소스의 경로를 계층적인 링크 형태로 표시합니다." />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Custom separator" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={separatorCode} setCode={setSeparatorCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Collapsed" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={collapsedCode} setCode={setCollapsedCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Dropdown" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={dropdownCode} setCode={setDropdownCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Breadcrumb"
        description="페이지 탐색을 위한 Breadcrumb 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
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
            default: '',
            description: 'Breadcrumb 내에서 여러 항목을 리스트 형식으로 포함합니다.',
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
            default: '',
            description: '클릭 시 이동할 URL을 지정합니다.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
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
            default: '<ChevronRight size={20} className="text-gray-500" />',
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
            default: '',
            description: '현재 위치를 설명하는 텍스트를 포함합니다.',
          },
        ]}
      />
    </>
  )
}
