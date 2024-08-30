'use client'
import React, { useState, useEffect, useRef } from 'react'
import * as Babel from '@babel/standalone'
import { Ban } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
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
import Button from '@/components/ui/button'
import Radio from '@/components/ui/radio'

export default function DropdownPage() {
  const menuRef1 = useRef<HTMLDivElement>(null)
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const menuRef2 = useRef<HTMLDivElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)

  const [defaultCode, setDefaultCode] = useState(`
    <DropdownMenu>
      <DropdownMenuTrigger toggleStatusBar={toggleStatusBar} buttonRef={buttonRef1}>
        <Button
          variant="outlined"
          className="text-gray-500 hover:text-foreground hover:opacity-100"
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        showStatusBar={showDefault}
        toggleStatusBar={toggleStatusBar}
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
      <DropdownMenuTrigger toggleStatusBar={toggleRadioStatusBar} buttonRef={buttonRef2} >
        <Button
          variant="outlined"
          className="text-gray-500 hover:text-foreground hover:opacity-100"
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        showStatusBar={showRadio}
        toggleStatusBar={toggleRadioStatusBar}
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

  const [showDefault, setShowDefault] = useState(false)
  const [showRadio, setShowRadio] = useState(false)

  useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent)
  }, [defaultCode, showDefault])

  useEffect(() => {
    transformAndSetComponent(radioCode, setRadioComponent)
  }, [radioCode, showRadio])

  const toggleStatusBar = () => {
    setShowDefault((prevState) => !prevState)
  }

  const toggleRadioStatusBar = () => {
    setShowRadio((prevState) => !prevState)
  }

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
        'DropdownMenuLabel',
        'DropdownMenuTrigger',
        'DropdownMenuContent',
        'DropdownMenuItem',
        'toggleStatusBar',
        'toggleRadioStatusBar',
        'showDefault',
        'showRadio',
        'menuRef1',
        'menuRef2',
        'buttonRef1',
        'buttonRef2',
        'Radio',
        'Button',
        'Ban',
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
        DropdownMenuLabel,
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuItem,
        toggleStatusBar,
        toggleRadioStatusBar,
        showDefault,
        showRadio,
        menuRef1,
        menuRef2,
        buttonRef1,
        buttonRef2,
        Radio,
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
            <BreadcrumbText>Dropdown</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain
          title="Dropdown"
          description="버튼을 눌러 동작이나 기능 세트와 같은 메뉴를 사용자에게 표시합니다."
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
        description="드롭다운 메뉴를 위한 컨테이너 컴포넌트입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '드롭다운 메뉴 내부의 컴포넌트를 포함합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuTrigger"
        description="드롭다운 메뉴를 여는 트리거 컴포넌트입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '드롭다운 메뉴를 열기 위한 버튼 또는 기타 트리거 요소를 포함합니다.',
          },
          {
            prop: 'toggleStatusBar',
            type: '(event: React.MouseEvent) => void',
            default: '',
            description: '드롭다운 메뉴를 열기 위한 버튼 또는 기타 트리거 요소를 포함합니다.',
          },
          {
            prop: 'buttonRef',
            type: 'React.RefObject<HTMLButtonElement>',
            default: '',
            description: '트리거 버튼에 대한 참조를 제공합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuContent"
        description="드롭다운 메뉴의 콘텐츠를 표시하는 컴포넌트입니다."
        props={[
          {
            prop: 'showStatusBar',
            type: 'boolean',
            default: 'false',
            description: '드롭다운 메뉴가 열려 있는지 여부를 제어합니다.',
          },
          {
            prop: 'toggleStatusBar',
            type: '(event: React.MouseEvent) => void',
            default: '',
            description: '드롭다운 메뉴의 열림/닫힘 상태를 토글하는 함수입니다.',
          },
          {
            prop: 'menuRef',
            type: 'React.RefObject<HTMLDivElement>',
            default: '',
            description: '메뉴 콘텐츠의 참조를 전달하는 데 사용됩니다.',
          },
          {
            prop: 'buttonRef',
            type: 'React.RefObject<HTMLButtonElement>',
            default: '',
            description: '트리거 버튼의 참조를 전달하는 데 사용됩니다.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '드롭다운 메뉴 내부에 표시될 내용을 포함합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuLabel"
        description="드롭다운 메뉴 항목의 레이블을 표시하는 컴포넌트입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '레이블 텍스트 또는 콘텐츠를 포함합니다.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuItem"
        description="드롭다운 메뉴의 각 항목을 나타내는 컴포넌트입니다."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '드롭다운 메뉴 항목에 표시될 내용을 포함합니다.',
          },
          {
            prop: 'href',
            type: 'string',
            default: '',
            description: '링크로 동작하도록 할 때 사용하는 URL입니다. 지정되지 않은 경우 단순한 텍스트로 표시됩니다.',
          },
        ]}
      />
    </>
  )
}
