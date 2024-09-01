'use client'
import React, { useState, useEffect } from 'react'
import * as Babel from '@babel/standalone'
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigLeftDash,
  ArrowBigRightDash,
  ChevronLeft,
  ChevronRight,
  Ban,
} from 'lucide-react'
import Pagination from '@/components/ui/pagination'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

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

  useEffect(() => {
    transformAndSetComponent(defaultCode, setRenderedComponent1)
  }, [defaultCode, currentPage1])
  useEffect(() => {
    transformAndSetComponent(variantCode1, setRenderedComponent2)
  }, [variantCode1, currentPage2])
  useEffect(() => {
    transformAndSetComponent(variantCode2, setRenderedComponent3)
  }, [variantCode2, currentPage3])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function(
        'React',
        'Pagination',
        'ArrowBigLeft',
        'ArrowBigRight',
        'ArrowBigLeftDash',
        'ArrowBigRightDash',
        'ChevronLeft',
        'ChevronRight',
        'currentPage1',
        'currentPage2',
        'currentPage3',
        'handlePageChange1',
        'handlePageChange2',
        'handlePageChange3',
        `return ${transformedCode};`,
      )

      const element = Component(
        React,
        Pagination,
        ArrowBigLeft,
        ArrowBigRight,
        ArrowBigLeftDash,
        ArrowBigRightDash,
        ChevronLeft,
        ChevronRight,
        currentPage1,
        currentPage2,
        currentPage3,
        handlePageChange1,
        handlePageChange2,
        handlePageChange3,
        Ban,
      )

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbText>Pagination</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain title="Pagination" description="페이지 탐색, 다음 및 이전 링크가 있는 페이지 번호 매기기." />
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
            description: '현재 선택된 페이지 번호를 설정합니다.',
          },
          {
            prop: 'totalPages',
            type: 'number',
            default: '',
            description: '총 페이지 수를 설정합니다.',
          },
          {
            prop: 'showingPages',
            type: 'number',
            default: '',
            description: '한 번에 표시할 페이지 번호의 수를 설정합니다.',
          },
          {
            prop: 'onPageChange',
            type: '(page: number) => void',
            default: '',
            description: '페이지 번호가 변경될 때 호출되는 콜백 함수입니다.',
          },
          {
            prop: 'currentPageStyle',
            type: 'string',
            default: 'border border-border rounded-lg',
            description: '현재 선택된 페이지의 스타일을 설정합니다.',
          },
          {
            prop: 'startIcon',
            type: 'React.ReactNode',
            default: '<ChevronsLeft size={20} />',
            description: '첫 페이지로 이동하는 버튼에 사용되는 아이콘을 설정합니다.',
          },
          {
            prop: 'prevIcon',
            type: 'React.ReactNode',
            default: '<ChevronLeft size={20} /> Previous',
            description: '이전 페이지로 이동하는 버튼에 사용되는 아이콘을 설정합니다.',
          },
          {
            prop: 'nextIcon',
            type: 'React.ReactNode',
            default: 'Next <ChevronRight size={20} />',
            description: '다음 페이지로 이동하는 버튼에 사용되는 아이콘을 설정합니다.',
          },
          {
            prop: 'lastIcon',
            type: 'React.ReactNode',
            default: '<ChevronsRight size={20} />',
            description: '마지막 페이지로 이동하는 버튼에 사용되는 아이콘을 설정합니다.',
          },
        ]}
      />
    </>
  )
}
