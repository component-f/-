'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'

export default function SheetPage() {
  const [defaultCode, setDefaultCode] = useState(`
    <Sheet>
      <SheetTrigger>
        <Button onClick={toggleSheet}>Open</Button>
      </SheetTrigger>
      <SheetContent sheet={sheet} toggleSheet={toggleSheet}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here.
            <br /> Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <Input id="name" type="text" placeholder="type your name." className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <Input id="username" type="text" placeholder="type your username" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose>
            <Button variant="contained" onClick={toggleSheet}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    `)
  const [defaultComponent, setDefaultComponent] = useState<JSX.Element | null>(null)

  const [sheet, setSheet] = useState(false)
  const toggleSheet = () => {
    setSheet(!sheet)
  }

  const sheetElement = {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
    sheet,
    toggleSheet,
    Button,
    Input,
  }

  useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent, sheetElement)
  }, [defaultCode, sheet])

  return (
    <>
      <Component>
        <ComponentExplain
          title="Sheet"
          description="Extends the Dialog component to display content that complements the main content of the screen."
        />
        <ComponentContainer>
          <ComponentExample>{defaultComponent}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Sheet"
        description="A component used for composing a sheet for tasks like editing profiles."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the sheet.',
          },
          {
            prop: 'sheet',
            type: 'boolean',
            default: 'false',
            description: 'Used to control the visibility of the sheet.',
          },
          {
            prop: 'toggleSheet',
            type: '() => void',
            default: '',
            description: 'A function to toggle the opening and closing of the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetTrigger"
        description="Properties of the trigger button used to open the Sheet component."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes content to act as the trigger element for opening the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetContent"
        description="Properties of the component that contains the content inside the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the sheet.',
          },
          {
            prop: 'sheet',
            type: 'boolean',
            default: 'false',
            description: 'Used to control the visibility of the sheet.',
          },
          {
            prop: 'toggleSheet',
            type: '() => void',
            default: '',
            description: 'A function to toggle the opening and closing of the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetHeader"
        description="Element that composes the header of the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the header.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetTitle"
        description="Element that represents the title of the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes text or content used as the title of the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetDescription"
        description="Provides a description for the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes text or content used as a description for the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetFooter"
        description="Element that composes the footer area of the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes buttons or other content to be included in the footer area.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetClose"
        description="Element used to close the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes content like a button that provides the functionality to close the sheet.',
          },
        ]}
      />
    </>
  )
}
