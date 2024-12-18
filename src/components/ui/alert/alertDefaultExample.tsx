'use client'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
} from '@/components/common/component'
import useRenderComponent from '@/hooks/useRenderComponent'
import { Alert, AlertHeader, AlertTitle, AlertDescription, AlertButton } from '@/components/ui/alert'
import { TComponentMap } from '@/types/componentMap'
import { useState } from 'react'
import { CircleCheckBig, Info, Ban } from 'lucide-react'

const AlertDefaultExample = () => {
  const [defaultCode, setDefaultCode] = useState(`
    <Alert icon={<CircleCheckBig size={35} />} >
      <AlertHeader>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </AlertHeader>
      <AlertButton onClick={() => alert('Btn')}>Btn</AlertButton>
    </Alert>
    `)

  const componentMap: TComponentMap = {
    Alert,
    AlertHeader,
    AlertTitle,
    AlertDescription,
    AlertButton,
    CircleCheckBig,
  }

  const { renderedComponent } = useRenderComponent(defaultCode, setDefaultCode, componentMap)

  return (
    <Component>
      <ComponentExplain title="Alert" description="Displays a callout for user attention." />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
      </ComponentContainer>
    </Component>
  )
}

const AlertVariantExample = () => {
  const [variantCode, setVariantCode] = useState(`
    <div className="flex flex-col gap-2">
      <Alert icon={<CircleCheckBig size={35} className="text-white" />} className="bg-blue-500 border-none">
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

  const componentMap: TComponentMap = {
    Alert,
    AlertHeader,
    AlertTitle,
    AlertDescription,
    CircleCheckBig,
    Info,
  }

  const { renderedComponent } = useRenderComponent(variantCode, setVariantCode, componentMap)

  return (
    <Component>
      <ComponentExplain variant="Variant" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={variantCode} setCode={setVariantCode} />
      </ComponentContainer>
    </Component>
  )
}

const AlertErrorExample = () => {
  const [errorCode, setErrorCode] = useState(`
    <Alert icon={<Ban size={35} className="text-red-500" />} className="bg-red-100 border-red-500">
      <AlertHeader>
        <AlertTitle className="text-red-500">It's an error</AlertTitle>
        <AlertDescription className="text-red-500">An error has occurred. Please try again later.</AlertDescription>
      </AlertHeader>
      <AlertButton onClick={() => confirm("Do you want retry?")} className="text-red-500">Retry</AlertButton>
    </Alert>
    `)

  const componentMap: TComponentMap = {
    Alert,
    AlertHeader,
    AlertTitle,
    AlertDescription,
    AlertButton,
    Ban,
  }

  const { renderedComponent } = useRenderComponent(errorCode, setErrorCode, componentMap)

  return (
    <Component>
      <ComponentExplain variant="Error with button" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={errorCode} setCode={setErrorCode} />
      </ComponentContainer>
    </Component>
  )
}

export { AlertDefaultExample, AlertVariantExample, AlertErrorExample }
