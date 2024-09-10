'use client'

import React, { useState, useEffect } from 'react'
import { CircleCheckBig, Ban, Info } from 'lucide-react'
import { Alert, AlertButton, AlertDescription, AlertHeader, AlertTitle } from '@/components/ui/alert'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'
import { Skeleton } from '@/components/ui/skeleton'

export default function AlertPage() {
  const [defaultCode, setDefaultCode] = useState(`
    <Alert icon={<CircleCheckBig size={35} />} >
      <AlertHeader>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </AlertHeader>
      <AlertButton onClick={() => alert('Btn')}>Btn</AlertButton>
    </Alert>
    `)

  const [variantCode, setVariantCode] = useState(`
    <div className="flex flex-col gap-2">
      <Alert icon={<Info size={35} className="text-white" />} className="bg-blue-500 border-none">
        <AlertHeader>
          <AlertTitle className="text-white">Success</AlertTitle>
          <AlertDescription className="text-white">The work was completed successfully.</AlertDescription>
        </AlertHeader>
      </Alert>
      <Alert icon={<Info size={35} className="text-black"/>} className="bg-yellow-300 border-none">
        <AlertHeader>
          <AlertTitle className="text-black">Information</AlertTitle>
          <AlertDescription className="text-black">Please note that the system will undergo maintenance at midnight.</AlertDescription>
        </AlertHeader>
      </Alert>
    </div>
    `)

  const [errorCode, setErrorCode] = useState(`
    <Alert icon={<Ban size={35} className="text-red-500" />} className="bg-red-100 border-red-500">
      <AlertHeader>
        <AlertTitle className="text-red-500">It's an error</AlertTitle>
        <AlertDescription className="text-red-500">An error has occurred. Please try again later.</AlertDescription>
      </AlertHeader>
      <AlertButton onClick={() => confirm("Do you want retry?")} className="text-red-500">Retry</AlertButton>
    </Alert>
    `)

  // 렌더링 상태를 추적하는 상태
  const [loading, setLoading] = useState({
    default: true,
    variant: true,
    error: true,
  })

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)

  const dependencies = {
    default: { Alert, AlertHeader, AlertTitle, AlertDescription, AlertButton, CircleCheckBig },
    variant: { Alert, AlertHeader, AlertTitle, AlertDescription, AlertButton, Info },
    error: { Alert, AlertHeader, AlertTitle, AlertDescription, AlertButton, Ban },
  }

  useEffect(() => {
    transformAndSetComponent(
      defaultCode,
      (component) => {
        setRenderedComponent1(component)
        setLoading((prev) => ({ ...prev, default: false }))
      },
      dependencies.default,
    )
  }, [defaultCode])

  useEffect(() => {
    transformAndSetComponent(
      variantCode,
      (component) => {
        setRenderedComponent2(component)
        setLoading((prev) => ({ ...prev, variant: false }))
      },
      dependencies.variant,
    )
  }, [variantCode])

  useEffect(() => {
    transformAndSetComponent(
      errorCode,
      (component) => {
        setRenderedComponent3(component)
        setLoading((prev) => ({ ...prev, error: false }))
      },
      dependencies.error,
    )
  }, [errorCode])

  return (
    <>
      <Component>
        <ComponentExplain title="Alert" description="Displays a callout for user attention." />
        <ComponentContainer>
          <ComponentExample>
            {loading.default ? <Skeleton className="w-[500px] h-[54px] rounded-lg" /> : RenderedComponent1}
          </ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Variant" />
        <ComponentContainer>
          <ComponentExample>
            {loading.variant ? (
              <div className="flex flex-col gap-2">
                <Skeleton className="w-[500px] h-[54px] rounded-lg" />
                <Skeleton className="w-[500px] h-[54px] rounded-lg" />
              </div>
            ) : (
              RenderedComponent2
            )}
          </ComponentExample>
          <ComponentExampleCode code={variantCode} setCode={setVariantCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Error with button" />
        <ComponentContainer>
          <ComponentExample>
            {loading.error ? <Skeleton className="w-[500px] h-[54px] rounded-lg" /> : RenderedComponent3}
          </ComponentExample>
          <ComponentExampleCode code={errorCode} setCode={setErrorCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Alert"
        description="The properties of the Alert component used to display warning or informational messages. The Alert component can contain children such as AlertHeader, AlertTitle, AlertDescription, and AlertButton."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the Alert component.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: '',
            description: 'Specifies the icon to be displayed on the left side of the Alert.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description:
              'The content inside the Alert, which can include components like AlertHeader, AlertTitle, AlertDescription, and AlertButton.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertHeader"
        description="The properties of the AlertHeader component which wraps the title and description."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertHeader component.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content inside the AlertHeader, typically includes AlertTitle and AlertDescription.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertTitle"
        description="The properties of the AlertTitle component which represents the title of the Alert."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertTitle component.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content of the title.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertDescription"
        description="The properties of the AlertDescription component which provides additional details about the Alert."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertDescription component.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content of the description.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertButton"
        description="The properties of the AlertButton component, which represents the button inside the Alert."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertButton component.',
          },
          {
            prop: 'onClick',
            type: '() => void',
            default: '',
            description: 'The function that is called when the button is clicked.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content of the button, typically a text label.',
          },
        ]}
      />
    </>
  )
}
