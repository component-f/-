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
      className=""
      title="title"
      description="description."
      icon={<CircleCheckBig size={35} />}
      btn={() => alert("default")}
      btnMsg="default"
    />`)

  const [variantCode, setVariantCode] = useState(`
    <div className="flex gap-2">
      <Alert
        className="w-[300px] bg-blue-500 text-white"
        title="Success"
        description="작업이 성공적으로 진행되었습니다."
        icon={<CircleCheckBig size={35} />}
      />
      <Alert
        className="w-[300px] bg-yellow-300 text-grey"
        title="Info"
        description="추가적인 정보가 필요합니다."
        icon={<Info size={35} />}
      />
    </div>
    `)

  const [errorCode, setErrorCode] = useState(`
    <Alert
      className="w-1/3 bg-red-500 text-white"
      title="Error"
      description="오류입니다."
      icon={<Ban size={35} />}
      btn={() => alert("확인")}
      btnMsg="확인"
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
        <ComponentExplain title="Alert" description="사용자의 주의를 끌기 위한 콜아웃을 표시합니다." />
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
        description="경고 메시지나 정보 메시지를 표시하기 위한 Alert 컴포넌트의 속성들입니다."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Alert 컴포넌트의 추가적인 CSS 클래스를 지정합니다.',
          },
          {
            prop: 'title',
            type: 'string',
            default: '',
            description: 'Alert의 제목을 지정합니다.',
          },
          {
            prop: 'description',
            type: 'string',
            default: '',
            description: 'Alert에 표시될 메시지나 콘텐츠를 지정합니다.',
          },
          {
            prop: 'btn',
            type: '() => void',
            default: '',
            description: '버튼을 클릭했을 때 호출되는 함수입니다.',
          },
          {
            prop: 'btnMsg',
            type: 'string',
            default: '',
            description: '버튼에 표시될 메시지를 지정합니다.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: '',
            description: 'Alert의 왼쪽에 표시될 아이콘을 지정합니다.',
          },
        ]}
      />
    </>
  )
}
