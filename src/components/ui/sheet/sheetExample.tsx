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
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TComponentMap } from '@/types/componentMap'

const SheetDefaultExample = () => {
  const [defaultCode, setDefaultCode] = useState(`
    <Sheet>
      <SheetTrigger>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent>
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
            <Button variant="contained">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  `)

  const componentMap: TComponentMap = {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
    Button,
    Input,
  }

  const { renderedComponent } = useRenderComponent(defaultCode, setDefaultCode, componentMap)

  return (
    <Component>
      <ComponentExplain
        title="Sheet"
        description="Extends the Dialog component to display content that complements the main content of the screen."
      />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={defaultCode} setCode={setDefaultCode}></ComponentExampleCode>
      </ComponentContainer>
    </Component>
  )
}

export { SheetDefaultExample }
