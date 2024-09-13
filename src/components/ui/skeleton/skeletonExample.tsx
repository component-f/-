'use client'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
} from '@/components/common/component'
import { useState } from 'react'
import useRenderComponent from '@/hooks/useRenderComponent'
import { TComponentMap } from '@/types/componentMap'
import { Skeleton } from '.'

const SkeletonDefaultExample = () => {
  const [defaultCode, setDefaultCode] = useState<string>(`
    <div className="flex space-x-2">
      <Skeleton className="rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-10 rounded-sm" />
        <Skeleton className="h-4 w-40 rounded-sm" />
      </div>
    </div>
  `)

  const { renderedComponent } = useRenderComponent(defaultCode, setDefaultCode, { Skeleton } as TComponentMap)

  return (
    <Component>
      <ComponentExplain title="Skeleton" description="Used to display a placeholder while content is loading." />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={defaultCode} setCode={setDefaultCode}></ComponentExampleCode>
      </ComponentContainer>
    </Component>
  )
}

export { SkeletonDefaultExample }
