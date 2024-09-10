'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Ellipsis, Slash, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
        <ComponentExplain
          title="Breadcrumb"
          description="Displays the path to the current resource using a hierarchy of links."
        />
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
        description="The properties of the Breadcrumb component used for page navigation."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes the content that includes each item of the Breadcrumb.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbList"
        description="An element that composes a list within the Breadcrumb."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes multiple items in a list format within the Breadcrumb.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbLink"
        description="An element that provides a link for a Breadcrumb item."
        props={[
          {
            prop: 'href',
            type: 'string',
            default: '',
            description: 'Specifies the URL to navigate to when clicked.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the link text or content.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbSeparator"
        description="An element that separates the items in the Breadcrumb."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '<ChevronRight size={20} className="text-gray-500" />',
            description: 'Can include a separator symbol or text.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbText"
        description="A text element that indicates the current position within the Breadcrumb."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the text that describes the current position.',
          },
        ]}
      />
    </>
  )
}
