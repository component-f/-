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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TComponentMap } from '@/types/componentMap'
import { Radio } from '../radio'

const DropdownDefaultExample = () => {
  const [defaultCode, setDefaultCode] = useState(`
    <DropdownMenu>
      <DropdownMenuTrigger keyId="default">
        <Button variant="outlined">
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent keyId="default">
        <DropdownMenuItem href="/docs">Documentation</DropdownMenuItem>
        <DropdownMenuItem href="/docs/components/dropdown">Dropdown</DropdownMenuItem>
        <DropdownMenuItem href="/examples">Examples</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    `)

  const componentMap: TComponentMap = {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    Button,
  }

  const { renderedComponent } = useRenderComponent(defaultCode, setDefaultCode, componentMap)

  return (
    <Component>
      <ComponentExplain
        title="Dropdown"
        description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
      </ComponentContainer>
    </Component>
  )
}

const DropdownRadioExample = () => {
  const [radioCode, setRadioCode] = useState(`
    <DropdownMenu>
      <DropdownMenuTrigger keyId="radio">
        <Button variant="outlined">
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent keyId="radio">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <form className="w-full px-4 bg-white rounded-lg shadow">
            <div className="flex flex-col">
              <DropdownMenuItem>
                <Radio label="Top" name="options" value="Top" className="flex text-gray-600" />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Radio label="Bottom" name="options" value="Bottom" className="flex text-gray-600" />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Radio label="Left" name="options" value="Left" className="flex text-gray-600" />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Radio label="Right" name="options" value="Right" className="flex text-gray-600" />
              </DropdownMenuItem>
            </div>
          </form>
      </DropdownMenuContent>
    </DropdownMenu>
  `)
  const componentMap: TComponentMap = {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    Button,
    Radio,
  }

  const { renderedComponent } = useRenderComponent(radioCode, setRadioCode, componentMap)

  return (
    <Component>
      <ComponentExplain variant="With Radio" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={radioCode} setCode={setRadioCode} />
      </ComponentContainer>
    </Component>
  )
}

export { DropdownDefaultExample, DropdownRadioExample }
