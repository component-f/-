import React from 'react'
import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
type TPaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showingPages: number
  startIcon?: React.ReactNode
  prevIcon?: React.ReactNode
  nextIcon?: React.ReactNode
  lastIcon?: React.ReactNode
  currentPageStyle?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  showingPages,
  onPageChange,
  startIcon,
  prevIcon,
  nextIcon,
  lastIcon,
  currentPageStyle,
}: TPaginationProps) {
  function generatePages(currentPage: number, totalPages: number): number[] {
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
      <ul className="flex items-center">
        {currentPage === 1 ? null : (
          <>
            <li>
              <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className="py-2">
                {startIcon ? startIcon : <ChevronsLeft size={20} />}
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex pr-4 py-2 items-center"
              >
                {prevIcon ? (
                  prevIcon
                ) : (
                  <>
                    <ChevronLeft size={20} />
                    Previous
                  </>
                )}
              </button>
            </li>
          </>
        )}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={twMerge(
                `px-4 py-2 mr-1 ${page === currentPage ? `border ${currentPageStyle ? currentPageStyle : 'rounded-lg'}` : ''}`,
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
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center pl-4 py-2"
              >
                {nextIcon ? (
                  nextIcon
                ) : (
                  <>
                    Next <ChevronRight size={20} />
                  </>
                )}
              </button>
            </li>
            <li>
              <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className="py-2">
                {lastIcon ? lastIcon : <ChevronsRight size={20} />}
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
