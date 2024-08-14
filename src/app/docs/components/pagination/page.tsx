'use client'
import { useState } from 'react'
import Pagination from '@/components/ui/pagination'

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageChange2 = (page: number) => {
    setCurrentPage2(page)
  }

  return (
    <>
      <div className="mt-8 text-3xl font-bold">Pagination</div>
      <p className="mt-2 text-lg text-gray200">페이지 탐색, 다음 및 이전 링크가 있는 페이지 번호 매기기.</p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <Pagination showingPages={5} currentPage={currentPage} totalPages={20} onPageChange={handlePageChange} />
          <pre>
            <code>{`<Pagination showingPages={5} currentPage={currentPage} totalPages={20} onPageChange={handlePageChange} />`}</code>
          </pre>

          <label className="text-lg">Variant</label>
          <Pagination showingPages={10} currentPage={currentPage2} totalPages={20} onPageChange={handlePageChange2} />
          <pre>
            <code>{`<Pagination showingPages={10} currentPage={currentPage} totalPages={20} onPageChange={handlePageChange} />`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
