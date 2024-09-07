'use client'

import React, { useState, useEffect } from 'react'
import { ArrowBigLeft, ArrowBigRight, ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'
import { Pagination } from '@/components/ui/pagination'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { transformAndSetComponent } from '@/utils/transformAndSetComponent'

export default function PaginationPage() {
  const [currentPage1, setCurrentPage1] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(1)
  const [currentPage3, setCurrentPage3] = useState(1)

  const [defaultCode, setDefaultCode] = useState(`
    <Pagination
      showingPages={5}
      totalPages={20}
      currentPage={currentPage1}
      onPageChange={handlePageChange1}
    />
  `)
  const [variantCode1, setVariantCode1] = useState(`
    <Pagination
      showingPages={10}
      totalPages={20}
      currentPage={currentPage2}
      onPageChange={handlePageChange2}
      currentPageStyle="rounded-full"
    />
  `)
  const [variantCode2, setVariantCode2] = useState(`
    <Pagination
      showingPages={5}
      totalPages={20}
      currentPage={currentPage3}
      onPageChange={handlePageChange3}
      currentPageStyle="border-black rounded-sm"
      prevIcon={<ArrowBigLeft />}
      nextIcon={<ArrowBigRight />}
      startIcon={<ArrowBigLeftDash />}
      lastIcon={<ArrowBigRightDash />}
    />
  `)
  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)

  const handlePageChange1 = (page: number) => {
    setCurrentPage1(page)
  }

  const handlePageChange2 = (page: number) => {
    setCurrentPage2(page)
  }

  const handlePageChange3 = (page: number) => {
    setCurrentPage3(page)
  }

  const dependencies = {
    default: { Pagination, currentPage1, handlePageChange1 },
    variant1: { Pagination, currentPage2, handlePageChange2 },
    variant2: {
      Pagination,
      currentPage3,
      handlePageChange3,
      ArrowBigLeft,
      ArrowBigRight,
      ArrowBigLeftDash,
      ArrowBigRightDash,
    },
  }

  useEffect(() => {
    transformAndSetComponent(defaultCode, setRenderedComponent1, dependencies.default)
  }, [defaultCode, currentPage1])
  useEffect(() => {
    transformAndSetComponent(variantCode1, setRenderedComponent2, dependencies.variant1)
  }, [variantCode1, currentPage2])
  useEffect(() => {
    transformAndSetComponent(variantCode2, setRenderedComponent3, dependencies.variant2)
  }, [variantCode2, currentPage3])

  return (
    <>
      <Component>
        <ComponentExplain title="Pagination" description="Pagination with page navigation, next and previous links." />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="custom1" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={variantCode1} setCode={setVariantCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="custom2" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={variantCode2} setCode={setVariantCode2} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        props={[
          {
            prop: 'currentPage',
            type: 'number',
            default: '',
            description: 'Sets the currently selected page number.',
          },
          {
            prop: 'totalPages',
            type: 'number',
            default: '',
            description: 'Specifies the total number of pages.',
          },
          {
            prop: 'showingPages',
            type: 'number',
            default: '',
            description: 'Determines the number of page numbers to display at once.',
          },
          {
            prop: 'onPageChange',
            type: '(page: number) => void',
            default: '',
            description: 'Callback function called when the page number is changed.',
          },
          {
            prop: 'currentPageStyle',
            type: 'string',
            default: 'border border-border rounded-lg',
            description: 'Defines the style for the currently selected page.',
          },
          {
            prop: 'startIcon',
            type: 'React.ReactNode',
            default: '<ChevronsLeft size={20} />',
            description: 'Specifies the icon used for the button that moves to the first page.',
          },
          {
            prop: 'prevIcon',
            type: 'React.ReactNode',
            default: '<ChevronLeft size={20} /> Previous',
            description: 'Specifies the icon used for the button that moves to the previous page.',
          },
          {
            prop: 'nextIcon',
            type: 'React.ReactNode',
            default: 'Next <ChevronRight size={20} />',
            description: 'Specifies the icon used for the button that moves to the next page.',
          },
          {
            prop: 'lastIcon',
            type: 'React.ReactNode',
            default: '<ChevronsRight size={20} />',
            description: 'Specifies the icon used for the button that moves to the last page.',
          },
        ]}
      />
    </>
  )
}
