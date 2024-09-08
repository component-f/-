'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { Button } from '@/components/ui/button'
import { Radio } from '@/components/ui/radio'
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'

export default function DropdownPage() {
  const [showDefault, setShowDefault] = useState(false)
  const [showRadio, setShowRadio] = useState(false)
  const menuRef1 = useRef<HTMLDivElement>(null)
  const buttonRef1 = useRef<HTMLDivElement>(null)
  const menuRef2 = useRef<HTMLDivElement>(null)
  const buttonRef2 = useRef<HTMLDivElement>(null)

  const toggleStatusBar1 = () => {
    setShowDefault((prevState) => !prevState)
  }
  const toggleStatusBar2 = () => {
    setShowRadio((prevState) => !prevState)
  }

  const [defaultCode, setDefaultCode] = useState(`
    <DropdownMenu>
      <DropdownMenuTrigger toggleStatusBar={toggleStatusBar1} buttonRef={buttonRef1}>
        <Button
          variant="outlined"
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        showStatusBar={showDefault}
        toggleStatusBar={toggleStatusBar1}
        menuRef={menuRef1}
        buttonRef={buttonRef1}
      >
        <DropdownMenuItem href="/">Documentation</DropdownMenuItem>
        <DropdownMenuItem href="/docs/components/Dropdown">Dropdown</DropdownMenuItem>
        <DropdownMenuItem href="/examples">Examples</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    `)
  const [radioCode, setRadioCode] = useState(`
    <DropdownMenu>
      <DropdownMenuTrigger toggleStatusBar={toggleStatusBar2} buttonRef={buttonRef2} >
        <Button
          variant="outlined"
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        showStatusBar={showRadio}
        toggleStatusBar={toggleStatusBar2}
        menuRef={menuRef2}
        buttonRef={buttonRef2}
      >
      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuItem>
          <form className="w-full px-4 bg-white rounded-lg shadow">
            <div className="flex flex-col">
              <Radio label="Top" name="options" value="Top" className="flex text-gray-600" />
              <Radio label="Bottom" name="options" value="Bottom" className="flex text-gray-600" />
              <Radio label="Left" name="options" value="Left" className="flex text-gray-600" />
              <Radio label="Right" name="options" value="Right" className="flex text-gray-600" />
            </div>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    `)
  const [defaultComponent, setDefaultComponent] = useState<JSX.Element | null>(null)
  const [radioComponent, setRadioComponent] = useState<JSX.Element | null>(null)

  const dropdownElements = {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    Button,
  }

  const dependencies = {
    default: {
      ...dropdownElements,
      showDefault,
      toggleStatusBar1,
      menuRef1,
      buttonRef1,
    },
    radio: {
      ...dropdownElements,
      showRadio,
      toggleStatusBar2,
      menuRef2,
      buttonRef2,
      Radio,
    },
  }

  useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent, dependencies.default)
  }, [defaultCode, showDefault])

  useEffect(() => {
    transformAndSetComponent(radioCode, setRadioComponent, dependencies.radio)
  }, [radioCode, showRadio])

  return (
    <>
      <Component>
        <ComponentExplain
          title="Dropdown"
          description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
        />
        <ComponentContainer>
          <ComponentExample>{defaultComponent}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Radio Group" />
        <ComponentContainer>
          <ComponentExample>{radioComponent}</ComponentExample>
          <ComponentExampleCode code={radioCode} setCode={setRadioCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="DropdownMenu"
        description="A container component for a dropdown menu."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes components inside the dropdown menu.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuTrigger"
        description="A trigger component that opens the dropdown menu."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the button or other trigger elements to open the dropdown menu.',
          },
          {
            prop: 'toggleStatusBar',
            type: '(event: React.MouseEvent) => void',
            default: '',
            description: 'Includes the button or other trigger elements to open the dropdown menu.',
          },
          {
            prop: 'buttonRef',
            type: 'React.RefObject<HTMLButtonElement>',
            default: '',
            description: 'Provides a reference to the trigger button.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuContent"
        description="A component that displays the content of the dropdown menu."
        props={[
          {
            prop: 'showStatusBar',
            type: 'boolean',
            default: 'false',
            description: 'Controls whether the dropdown menu is open.',
          },
          {
            prop: 'toggleStatusBar',
            type: '(event: React.MouseEvent) => void',
            default: '',
            description: 'A function that toggles the open/close state of the dropdown menu.',
          },
          {
            prop: 'menuRef',
            type: 'React.RefObject<HTMLDivElement>',
            default: '',
            description: 'Used to pass a reference to the menu content.',
          },
          {
            prop: 'buttonRef',
            type: 'React.RefObject<HTMLButtonElement>',
            default: '',
            description: 'Used to pass a reference to the trigger button.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the dropdown menu.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuLabel"
        description="A component that displays the label for dropdown menu items."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the label text or content.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuItem"
        description="A component that represents each item in the dropdown menu."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed in the dropdown menu item.',
          },
          {
            prop: 'href',
            type: 'string',
            default: '',
            description:
              'The URL used when the item behaves like a link. If not specified, it will be displayed as plain text.',
          },
        ]}
      />
    </>
  )
}
