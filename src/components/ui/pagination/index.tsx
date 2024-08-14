import { ChevronLeft, ChevronRight } from 'lucide-react'

type TPaginationProps = {
  currentPage: number
  currentPage2?: number
  totalPages: number
  onPageChange?: (page: number) => void
  onPageChange2?: (page: number) => void
  showingPages: number
}

export default function Pagination({
  currentPage,
  currentPage2,
  totalPages,
  showingPages,
  onPageChange,
  onPageChange2,
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

  const renderPagination = (currentPage: number, onPageChange: (page: number) => void) => (
    <ul className="flex list-none">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex px-4 py-2 mr-1 items-center"
        >
          <ChevronLeft size={20} />
          Previous
        </button>
      </li>
      {pages.map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 mr-1 ${page === currentPage ? 'border border-border rounded-lg' : ''}`}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center px-4 py-2"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </li>
    </ul>
  )

  return (
    <nav>
      {onPageChange
        ? renderPagination(currentPage, onPageChange)
        : onPageChange2 && currentPage2 !== undefined
          ? renderPagination(currentPage2, onPageChange2)
          : null}
    </nav>
  )
}
