'use client'

import React, { useState, useEffect } from 'react'
import * as Babel from '@babel/standalone'
import { Ban } from 'lucide-react'
import Skeleton from '@/components/ui/skeleton'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
export default function SkeletonPage() {
  const [defaultCode, setDefaultCode] = useState(`
    <div className="flex space-x-2">
      <Skeleton className="rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-10 rounded-sm" />
        <Skeleton className="h-4 w-40 rounded-sm" />
      </div>
    </div>
    `)
  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(defaultCode, setRenderedComponent1)
  }, [defaultCode])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Skeleton', `return ${transformedCode};`)

      const element = Component(React, Skeleton, Ban)

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
          title="Skeleton"
          description="콘텐츠가 로딩되는 동안 플레이스홀더를 표시하는 데 사용됩니다."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Skeleton Loading UI"
        description="로딩 상태를 나타내기 위해 사용되는 스켈레톤 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: 'bg-foreground rounded-full h-10 w-10',
            description: 'Skeleton 컴포넌트에 추가적인 스타일을 적용할 수 있습니다.',
          },
        ]}
      />
    </>
  )
}
