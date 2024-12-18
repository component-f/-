'use client'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
} from '@/components/common/component'
import useRenderComponent from '@/hooks/useRenderComponent'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TComponentMap } from '@/types/componentMap'
import { Ellipsis, Slash } from 'lucide-react'

const BreadcrumbDefaultExample = () => {
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

  const componentMap: TComponentMap = {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbText,
  }

  const { renderedComponent } = useRenderComponent(defaultCode, setDefaultCode, componentMap)

  return (
    <Component>
      <ComponentExplain
        title="Breadcrumb"
        description="Displays the path to the current resource using a hierarchy of links."
      />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
      </ComponentContainer>
    </Component>
  )
}

const BreadcrumbSeparatorExample = () => {
  const [separatorCode, setSeparatorCode] = useState(`
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator separator={<Slash size={15} />} />
        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        <BreadcrumbSeparator separator={<Slash size={15} />} />
        <BreadcrumbText>Breadcrumb</BreadcrumbText>
      </BreadcrumbList>
    </Breadcrumb>
    `)

  const componentMap: TComponentMap = {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbText,
    Slash,
  }

  const { renderedComponent } = useRenderComponent(separatorCode, setSeparatorCode, componentMap)

  return (
    <Component>
      <ComponentExplain variant="Separator" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={separatorCode} setCode={setSeparatorCode} />
      </ComponentContainer>
    </Component>
  )
}

const BreadcrumbDropdownExample = () => {
  const [dropdownCode, setDropdownCode] = useState(`
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="text-gray-500 hover:text-foreground hover:opacity-100">
              <Ellipsis size={15} />
            </Button>
          </DropdownMenuTrigger>
            <DropdownMenuContent>
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

  const componentMap: TComponentMap = {
    Breadcrumb,
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
  }

  const { renderedComponent } = useRenderComponent(dropdownCode, setDropdownCode, componentMap)

  return (
    <Component>
      <ComponentExplain variant="Dropdown" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={dropdownCode} setCode={setDropdownCode} />
      </ComponentContainer>
    </Component>
  )
}

export { BreadcrumbDefaultExample, BreadcrumbSeparatorExample, BreadcrumbDropdownExample }
