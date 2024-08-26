'use client'

import React, { useState, useEffect } from 'react'
import Alert from '@/components/ui/alert'
import * as Babel from '@babel/standalone'
import { Ban } from 'lucide-react'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
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

export default function SheetPage() {
  const [defaultCode, setDefaultCode] = useState(`
    <>
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
    </>
    `)
  const [defaultComponent, setDefaultComponent] = useState<JSX.Element | null>(null)

  const [sheet, setSheet] = useState(false)
  const toggleSheet = () => {
    setSheet(!sheet)
  }

  useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent)
  }, [defaultCode, sheet])

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
        'Input',
        'Sheet',
        'SheetClose',
        'SheetContent',
        'SheetDescription',
        'SheetHeader',
        'SheetFooter',
        'SheetTitle',
        'SheetTrigger',
        'sheet',
        'toggleSheet',
        'Button',
        `return ${transformedCode};`,
      )

      const element = Component(
        React,
        Input,
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
        Ban,
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
            <BreadcrumbText>Sheet</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain
          title="Sheet"
          description="화면의 주요 콘텐츠를 보완하는 콘텐츠를 표시하기 위해 Dialog 구성 요소를 확장합니다."
        />
        <ComponentContainer>
          <ComponentExample>{defaultComponent}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Child"
        description=""
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '컴포넌트에 CSS 클래스를 추가하여 스타일을 지정하는 데 사용됩니다.',
          },
        ]}
      />
    </>
  )
}
