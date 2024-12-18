'use client'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
} from '@/components/common/component'
import useRenderComponent from '@/hooks/useRenderComponent'
import { Pagination } from '@/components/ui/pagination'
import { useState } from 'react'
import { TComponentMap } from '@/types/componentMap'
import { ArrowBigLeft, ArrowBigRight, ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'

const PaginationDefaultExample = () => {
  const [defaultCode, setDefaultCode] = useState(`
    <Pagination
      showingPages={5}
      totalPages={20}
    />
  `)

  const { renderedComponent } = useRenderComponent(defaultCode, setDefaultCode, { Pagination } as TComponentMap)

  return (
    <Component>
      <ComponentExplain title="Pagination" description="Pagination with page navigation, next and previous links." />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
      </ComponentContainer>
    </Component>
  )
}

const PaginationVariantExample = () => {
  const [variantCode, setVariantCode] = useState(`
    <Pagination
      showingPages={10}
      totalPages={20}
      currentPageStyle="rounded-full"
    />
  `)
  const { renderedComponent } = useRenderComponent(variantCode, setVariantCode, { Pagination } as TComponentMap)

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

const PaginationIconExample = () => {
  const [iconCode, setIconCode] = useState(`
    <Pagination
      showingPages={5}
      totalPages={20}
      icon={[<ArrowBigLeftDash />, <ArrowBigLeft />, <ArrowBigRight />, <ArrowBigRightDash />]}
    />
  `)

  const componentMap: TComponentMap = {
    Pagination,
    ArrowBigLeft,
    ArrowBigRight,
    ArrowBigLeftDash,
    ArrowBigRightDash,
  }

  const { renderedComponent } = useRenderComponent(iconCode, setIconCode, componentMap)

  return (
    <Component>
      <ComponentExplain variant="Icon" />
      <ComponentContainer>
        <ComponentExample>{renderedComponent}</ComponentExample>
        <ComponentExampleCode code={iconCode} setCode={setIconCode} />
      </ComponentContainer>
    </Component>
  )
}

export { PaginationDefaultExample, PaginationVariantExample, PaginationIconExample }
