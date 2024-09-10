'use client'

import React, { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'

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
    transformAndSetComponent(defaultCode, setRenderedComponent1, { Skeleton })
  }, [defaultCode])

  return (
    <>
      <Component>
        <ComponentExplain title="Skeleton" description="Used to display a placeholder while content is loading." />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Skeleton Loading UI"
        description="The properties of the Skeleton component used to indicate a loading state."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: 'bg-foreground rounded-full h-10 w-10',
            description: 'Allows additional styling to be applied to the Skeleton component.',
          },
        ]}
      />
    </>
  )
}
