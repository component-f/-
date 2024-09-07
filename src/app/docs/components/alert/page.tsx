'use client'

import React, { useState, useEffect } from 'react'
import { CircleCheckBig, Ban, Info } from 'lucide-react'
import { Alert } from '@/components/ui/alert'
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
    <Alert
      title="title"
      description="description."
      icon={<CircleCheckBig size={35} />}
      btn={() => alert("default")}
      btnMsg="default"
    />`)

  const [variantCode, setVariantCode] = useState(`
    <div className="flex flex-col gap-2">
      <Alert
        className="bg-blue-500 text-white border-none"
        title="Success"
        description="The work was completed successfully."
        icon={<CircleCheckBig size={35} />}
      />
      <Alert
        className="bg-yellow-300 text-grey border-none"
        title="Info"
        description="Additional information is required."
        icon={<Info size={35} />}
      />
    </div>
    `)

  const [errorCode, setErrorCode] = useState(`
    <Alert
      className="w-[300px] bg-red-500 text-white border-none"
      title="Error"
      description="It's an error"
      icon={<Ban size={35} />}
      btn={() => alert("check")}
      btnMsg="check"
    />`)

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
    default: { Alert, CircleCheckBig },
    variant: { Alert, CircleCheckBig, Info },
    error: { Alert, Ban },
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
              <div className="flex gap-2">
                <Skeleton className="w-[300px] h-[54px] rounded-lg" />
                <Skeleton className="w-[300px] h-[54px] rounded-lg" />
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
            {loading.error ? <Skeleton className="w-[300px] h-[54px] rounded-lg" /> : RenderedComponent3}
          </ComponentExample>
          <ComponentExampleCode code={errorCode} setCode={setErrorCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Alert"
        description="The properties of the Alert component used to display warning or informational messages."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the Alert component.',
          },
          {
            prop: 'title',
            type: 'string',
            default: '',
            description: 'Specifies the title of the Alert.',
          },
          {
            prop: 'description',
            type: 'string',
            default: '',
            description: 'Specifies the message or content to be displayed in the Alert.',
          },
          {
            prop: 'btn',
            type: '() => void',
            default: '',
            description: 'The function that is called when the button is clicked.',
          },
          {
            prop: 'btnMsg',
            type: 'string',
            default: '',
            description: 'Specifies the message to be displayed on the button.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: '',
            description: 'Specifies the icon to be displayed on the left side of the Alert.',
          },
        ]}
      />
    </>
  )
}
