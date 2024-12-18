import React from 'react'
import { ComponentPropsTable } from '@/components/common/component'
import { SkeletonDefaultExample } from '@/components/ui/skeleton/skeletonExample'

export default function SkeletonPage() {
  return (
    <>
      <SkeletonDefaultExample />
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
