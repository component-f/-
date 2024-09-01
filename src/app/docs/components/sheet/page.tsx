'use client'

import React, { useState, useEffect } from 'react'
import * as Babel from '@babel/standalone'
import { Ban } from 'lucide-react'
import Button from '@/components/ui/button'
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
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <>
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
        title="Sheet"
        description="프로필 편집 등의 작업을 위한 시트를 구성하는 데 사용되는 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Sheet 내부에 표시될 콘텐츠를 포함합니다.',
          },
          {
            prop: 'sheet',
            type: 'boolean',
            default: 'false',
            description: '시트의 표시 상태를 결정하는 데 사용됩니다.',
          },
          {
            prop: 'toggleSheet',
            type: '() => void',
            default: '',
            description: '시트의 열림 또는 닫힘을 토글하는 함수입니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetTrigger"
        description="Sheet 컴포넌트를 열기 위한 트리거 버튼의 속성입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Sheet를 열기 위한 트리거 요소로서의 콘텐츠를 전달합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetContent"
        description="Sheet 내부의 콘텐츠를 포함하는 컴포넌트의 속성입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Sheet 내부에 표시될 콘텐츠를 포함합니다.',
          },
          {
            prop: 'sheet',
            type: 'boolean',
            default: 'false',
            description: '시트의 표시 상태를 결정하는 데 사용됩니다.',
          },
          {
            prop: 'toggleSheet',
            type: '() => void',
            default: '',
            description: '시트의 열림 또는 닫힘을 토글하는 함수입니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetHeader"
        description="Sheet의 헤더를 구성하는 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '헤더 내에 표시될 콘텐츠를 포함합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetTitle"
        description="Sheet의 제목을 나타내는 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Sheet의 제목으로 사용되는 텍스트 또는 콘텐츠를 전달합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetDescription"
        description="Sheet에 대한 설명을 제공하는 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Sheet 설명을 제공하는 텍스트 또는 콘텐츠를 전달합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetFooter"
        description="Sheet의 하단 영역을 구성하는 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '하단 영역에 포함될 버튼이나 기타 콘텐츠를 전달합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetClose"
        description="Sheet를 닫기 위한 요소입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Sheet를 닫는 기능을 제공하는 버튼 등의 콘텐츠를 포함합니다.',
          },
        ]}
      />
    </>
  )
}
