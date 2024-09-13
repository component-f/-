'use client'

import React, { useState } from 'react'
import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { cn } from '@/utils/cn'

type TPaginationProps = {
  totalPages: number
  showingPages: number
  icon?: React.ReactNode[] // 배열로 아이콘을 받는 prop
  currentPageStyle?: string
  className?: string
}

const Pagination: React.FC<TPaginationProps> = ({
  totalPages,
  showingPages,
  icon = [<ChevronsLeft />, <ChevronLeft />, <ChevronRight />, <ChevronsRight />], // 기본값 설정
  currentPageStyle,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const generatePages = (currentPage: number, totalPages: number): number[] => {
    const maxPagesToShow = showingPages % 2 === 0 ? showingPages - 1 : showingPages
    const halfPagesToShow = Math.floor(maxPagesToShow / 2)
    let startPage: number, endPage: number

    if (totalPages <= maxPagesToShow) {
      startPage = 1
      endPage = totalPages
    } else if (currentPage <= halfPagesToShow) {
      startPage = 1
      endPage = maxPagesToShow
    } else if (currentPage + halfPagesToShow >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1
      endPage = totalPages
    } else {
      startPage = currentPage - halfPagesToShow
      endPage = currentPage + halfPagesToShow
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  const pages = generatePages(currentPage, totalPages)

  return (
    <nav>
      <ul className={cn('flex items-center', className)}>
        {currentPage === 1 ? null : (
          <>
            <li>
              <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="flex items-center">
                {icon[0] || <ChevronsLeft size={20} />} {/* 첫 번째 아이콘 */}
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center"
              >
                {icon[1] || <ChevronLeft size={20} />} {/* 두 번째 아이콘 */}
                Previous
              </button>
            </li>
          </>
        )}

        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={twMerge(
                `px-4 py-2 mx-1 ${page === currentPage ? `border border-ring ${currentPageStyle || 'rounded-lg'}` : ''}`,
                currentPageStyle,
              )}
            >
              {page}
            </button>
          </li>
        ))}

        {currentPage === totalPages ? null : (
          <>
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center"
              >
                Next
                {icon[2] || <ChevronRight size={20} />} {/* 세 번째 아이콘 */}
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="flex items-center"
              >
                {icon[3] || <ChevronsRight size={20} />} {/* 네 번째 아이콘 */}
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export { Pagination }
