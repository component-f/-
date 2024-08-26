'use client'

import React from 'react'
import * as Babel from '@babel/standalone'

import { useToast } from '@/hooks/useToast'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import Button from '@/components/ui/button'

/**
 * Toast 컴포넌트 문서 페이지 컴포넌트
 */
export default function ToastPage() {
  const { toast } = useToast()

  const [defaultCode, setDefaultCode] = React.useState(`
  <Button
      variant="outlined" 
      type="button"
      onClick={() => {
          toast({ 
              title: 'Scheduled: Catch up ', 
              description: 'Friday, February 10, 2023 at 5:57 PM', 
          })
      }}
  >
      show Toast
  </Button>
  `)

  const [simpleCode, setSimpleCode] = React.useState(`
  <Button
      variant="outlined" 
      type="button"
      onClick={() => {
          toast({ 
              title: 'Your message has been sent.', 
          })
      }}
  >
      show Toast
  </Button>
  `)

  const [destructiveCode, setDestructiveCode] = React.useState(`
  <Button
      variant="outlined" 
      type="button"
      onClick={() => {
          toast({ 
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
          })
      }}
  >
      show Toast
  </Button>
  `)

  const [DefaultComponent, setDefaultComponent] = React.useState<JSX.Element | null>(null)
  const [SimpleComponent, setSimpleComponent] = React.useState<JSX.Element | null>(null)
  const [DestructiveComponent, setDestructiveComponent] = React.useState<JSX.Element | null>(null)

  React.useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent)
  }, [defaultCode])

  React.useEffect(() => {
    transformAndSetComponent(simpleCode, setSimpleComponent)
  }, [simpleCode])

  React.useEffect(() => {
    transformAndSetComponent(destructiveCode, setDestructiveComponent)
  }, [destructiveCode])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Button', 'toast', `return ${transformedCode};`)

      const element = Component(React, Button, toast)

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <div className="container pb-14">
      <Component>
        <ComponentExplain title="Toast" description="일시적으로 표시되는 간결한 메시지입니다." />
        <ComponentContainer>
          <ComponentExample>{DefaultComponent}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Simple" />
        <ComponentContainer>
          <ComponentExample>{SimpleComponent}</ComponentExample>
          <ComponentExampleCode code={simpleCode} setCode={setSimpleCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Destructive" />
        <ComponentContainer>
          <ComponentExample>{DestructiveComponent}</ComponentExample>
          <ComponentExampleCode code={destructiveCode} setCode={setDestructiveCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        description="다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다."
        props={[
          {
            prop: 'variant',
            type: `"default" | "destructive"`,
            default: 'default',
            description: '토스트의 형태입니다.',
          },
          {
            prop: 'title',
            type: `string`,
            default: '',
            description: '토스트의 제목입니다.',
          },
          {
            prop: 'description',
            type: `string`,
            default: '',
            description: '토스트의 설명입니다.',
          },
          {
            prop: 'duration',
            type: `string`,
            default: '5000',
            description: '각 토스트가 자동으로 닫히기 전에 경과해야 하는 시간(밀리초)입니다.',
          },
        ]}
      />
    </div>
  )
}
