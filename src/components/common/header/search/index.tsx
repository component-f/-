'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { SearchIcon, FileTextIcon, LayoutIcon, X, ClockIcon, SearchXIcon } from 'lucide-react'
import Link from 'next/link'
import { PATH } from '@/constants/path'
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalClose } from '@/components/ui/modal'
import { Button } from '@/components/ui/button'

// Debounce 함수 구현
function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return function (...args: Parameters<T>) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }
}

// '/' 경로 또는 빈 문자열을 'Main'으로 변환하는 함수
const formatPathName = (name: string) => {
  if (name === 'root' || name === '/' || name === '') {
    return 'Main'
  }
  return name.replace(/-/g, ' ')
}

// 검색 항목 렌더링 컴포넌트
const SearchItem = ({
  item,
  path,
  icon: Icon,
  isActive,
  onClick,
  onMouseEnter,
}: {
  item: string
  path: string
  icon: React.ElementType
  isActive: boolean
  onClick: () => void
  onMouseEnter: () => void
}) => (
  <li>
    <Link
      href={path}
      className={`flex items-center p-2 rounded-md ${isActive ? 'bg-accent text-accent-foreground' : ''}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <Icon size={16} className="mr-2" />
      <span className="capitalize block text-sm font-medium">{formatPathName(item)}</span>
    </Link>
  </li>
)

// 검색 섹션 렌더링 컴포넌트
const Section = ({
  title,
  items,
  icon,
  startIndex,
  hoveredIndex,
  onItemClick,
  onItemHover,
}: {
  title: string
  items: [string, string][]
  icon: React.ElementType
  startIndex: number
  hoveredIndex: number
  onItemClick: (path: string) => void
  onItemHover: (index: number) => void
}) => (
  <>
    {items.length > 0 && (
      <>
        <h3 className="text-sm font-semibold">{title}</h3>
        <ul className="mb-4 space-y-2">
          {items.map(([itemKey, path], index) => (
            <SearchItem
              key={itemKey}
              item={itemKey}
              path={path}
              icon={icon}
              isActive={hoveredIndex === startIndex + index}
              onClick={() => onItemClick(path)}
              onMouseEnter={() => onItemHover(startIndex + index)}
            />
          ))}
        </ul>
      </>
    )}
  </>
)

const Search = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  // 최근 기록 로드
  useEffect(() => {
    const storedRecentSearches = localStorage.getItem('recentSearches')
    if (storedRecentSearches) {
      setRecentSearches(JSON.parse(storedRecentSearches))
    }
  }, [])

  useEffect(() => {
    setHoveredIndex(0)
  }, [searchTerm])

  // 최근 검색 기록 업데이트
  const updateRecentSearches = useCallback((newSearch: string) => {
    setRecentSearches((prev) => {
      const updated = [newSearch, ...prev.filter((item) => item !== newSearch)]
      localStorage.setItem('recentSearches', JSON.stringify(updated.slice(0, 3)))
      return updated.slice(0, 3)
    })
  }, [])

  // 최근 기록 삭제 함수
  const removeRecentSearch = useCallback(
    (searchToRemove: string) => {
      const updatedSearches = recentSearches.filter((search) => search !== searchToRemove)
      setRecentSearches(updatedSearches)
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
    },
    [recentSearches],
  )

  // 검색어에 따라 페이지와 컴포넌트 필터링 및 알파벳 순 정렬
  const filteredPages = Object.entries(PATH)
    .filter(([, path]) => typeof path === 'string' && path.startsWith('/') && !path.startsWith('/docs/components'))
    .filter(([itemKey]) => {
      // 'Main' 검색 시 'root' 키 포함
      if (searchTerm.toLowerCase() === 'main') {
        return itemKey === 'root'
      }
      return itemKey.toLowerCase().includes(searchTerm.toLowerCase())
    })
    .map(([itemKey, path]) => [itemKey === 'root' || itemKey === '/' ? 'Main' : itemKey, path]) // 'root'를 'Main'으로 변환
    .sort(([a], [b]) => a.localeCompare(b)) as [string, string][]

  const filteredComponents = Object.entries(PATH)
    .filter(([, path]) => typeof path === 'string' && path.startsWith('/docs/components'))
    .filter(([itemKey]) => itemKey.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort(([a], [b]) => a.localeCompare(b)) as [string, string][]

  const hasResults = filteredPages.length > 0 || filteredComponents.length > 0

  // 검색 디바운스 적용
  const handleSearch = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }, 500)

  const handleClose = () => {
    setIsOpen(false)
    setSearchTerm('')
    setHoveredIndex(0)
  }

  const handleOpen = () => {
    setIsOpen(true)
    setSearchTerm('')
    setHoveredIndex(0)
  }

  const handleLinkClick = (path: string) => {
    updateRecentSearches(path)
    handleClose()
    router.push(path)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const totalItems = recentSearches.length + filteredPages.length + filteredComponents.length
    if (event.key === 'ArrowDown') {
      setHoveredIndex((prevIndex) => (prevIndex + 1) % totalItems)
    } else if (event.key === 'ArrowUp') {
      setHoveredIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
    } else if (event.key === 'Enter') {
      const allResults = [
        ...recentSearches.map((r) => [r, r] as [string, string]),
        ...filteredPages,
        ...filteredComponents,
      ]
      if (allResults[hoveredIndex]) {
        const path = allResults[hoveredIndex][1]
        updateRecentSearches(path)
        handleClose() // 모달 창 닫기
        router.push(path) // 경로 이동
      }
    }
  }

  return (
    <>
      <Modal>
        <ModalTrigger>
          <Button
            className="rounded-2xl h-8 flex items-center p-4 bg-muted  text-primary-active "
            onClick={handleOpen}
            variant="outlined"
          >
            <SearchIcon size={14} className="mb-[2px] mr-1 -ml-1" />
            <span>Search...</span>
          </Button>
        </ModalTrigger>
        {isOpen && (
          <ModalContent className="h-[400px] p-0 flex flex-col">
            <ModalHeader className="sticky top-0 z-10 border-b-0 flex flex-row items-center p-2 bg-background h-12 rounded-t-lg">
              <SearchIcon size={18} className="ml-2 -mr-1 -mb-1" />
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="flex-grow"
                style={{ border: 'none', boxShadow: 'none' }}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <ModalClose className="ml-auto mr-2" onClick={handleClose}>
                <X className="w-4 h-4" />
              </ModalClose>
            </ModalHeader>

            <div className="flex-1 overflow-y-auto px-4 mt-0">
              {!searchTerm && (
                <>
                  {recentSearches.length > 0 && (
                    <>
                      <h3 className="text-sm font-semibold">Recent</h3>
                      <ul className="mb-4 space-y-2">
                        {recentSearches.map((search, index) => {
                          const searchName = formatPathName(
                            Object.entries(PATH).find(([, path]) => path === search)?.[0] || search,
                          )
                          return (
                            <li
                              key={search}
                              className={`flex items-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground justify-between ${
                                hoveredIndex === index ? 'bg-accent text-accent-foreground' : ''
                              }`}
                              onClick={() => handleLinkClick(search)}
                              onMouseEnter={() => setHoveredIndex(index)}
                            >
                              <div className="flex items-center w-full">
                                <ClockIcon size={16} className="mr-2" />
                                <span className="capitalize block text-sm font-medium">{searchName}</span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation() // 이벤트 버블링 방지
                                  removeRecentSearch(search)
                                }}
                                className="text-xs text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    </>
                  )}
                  <Section
                    title="Links"
                    items={filteredPages}
                    icon={FileTextIcon}
                    startIndex={recentSearches.length}
                    hoveredIndex={hoveredIndex}
                    onItemClick={handleLinkClick}
                    onItemHover={setHoveredIndex}
                  />
                  <Section
                    title="Components"
                    items={filteredComponents}
                    icon={LayoutIcon}
                    startIndex={recentSearches.length + filteredPages.length}
                    hoveredIndex={hoveredIndex}
                    onItemClick={handleLinkClick}
                    onItemHover={setHoveredIndex}
                  />
                </>
              )}

              {searchTerm && (
                <>
                  <Section
                    title="Links"
                    items={filteredPages}
                    icon={FileTextIcon}
                    startIndex={0}
                    hoveredIndex={hoveredIndex}
                    onItemClick={handleLinkClick}
                    onItemHover={setHoveredIndex}
                  />
                  <Section
                    title="Components"
                    items={filteredComponents}
                    icon={LayoutIcon}
                    startIndex={filteredPages.length}
                    hoveredIndex={hoveredIndex}
                    onItemClick={handleLinkClick}
                    onItemHover={setHoveredIndex}
                  />
                </>
              )}
              {!hasResults && searchTerm && (
                <div className="flex flex-col items-center justify-center mt-10">
                  <SearchXIcon size={40} className="text-gray-500 mb-4" />
                  <p className="text-sm text-gray-500">No results for "{searchTerm}"</p>
                </div>
              )}
            </div>
          </ModalContent>
        )}
      </Modal>
    </>
  )
}

export { Search }
