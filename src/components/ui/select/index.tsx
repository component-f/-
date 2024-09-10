import React, { useState, useEffect, useRef } from 'react'

interface Option {
  label: string
  value: string
  description?: string // 설명 필드 추가
  hidden?: boolean // 숨김 필드 추가
  disabled?: boolean // 옵션 비활성화 속성 추가
}

interface SelectProps {
  options: Option[]
  onSelect: (value: string) => void
  className?: string
  defaultSelected?: string
}

const Select: React.FC<SelectProps> = ({ options, onSelect, className, defaultSelected }) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultSelected || options.find((option) => !option.hidden)?.value || '',
  )
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null) // select box 참조
  const dropdownRef = useRef<HTMLDivElement>(null) // 드롭다운을 참조하기 위한 ref

  useEffect(() => {
    if (defaultSelected) {
      setSelectedValue(defaultSelected)
    }
  }, [defaultSelected])

  useEffect(() => {
    if (selectRef.current && dropdownRef.current) {
      // Select 박스의 너비를 드롭다운의 최소 너비로 설정
      dropdownRef.current.style.minWidth = `${selectRef.current.offsetWidth}px`
    }
  }, [isOpen])

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false) // 외부 클릭 시 드롭다운 닫기
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (value: string) => {
    if (!options.find((option) => option.value === value)?.disabled) {
      // 비활성화된 옵션은 선택되지 않도록 조건 추가
      setSelectedValue(value)
      setIsOpen(false) // 옵션 선택 시 드롭다운 닫기
      onSelect(value)
    }
  }

  return (
    <div ref={selectRef} className={`relative inline-block ${className}`}>
      <button
        className="px-4 py-2 text-left border rounded-md shadow-sm ring-offset-background
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring text-sm
        pr-8 relative overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%' }}
      >
        {options.find((option) => option.value === selectedValue)?.label}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor" stroke="none">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-1 border rounded-md shadow-lg bg-white"
          style={{ minWidth: '100%', right: 0 }} // 드롭다운을 Select 박스 오른쪽 끝에 맞추고, 최소 너비를 select 박스 너비에 맞춤
        >
          <ul className="py-1 text-sm">
            {options
              .filter((option) => !option.hidden) // 숨겨진 옵션 제외
              .map((option) => (
                <li
                  key={option.value}
                  className={`cursor-pointer px-4 py-2 ${
                    option.value === selectedValue ? 'bg-gray-200' : ''
                  } ${option.disabled ? 'hover:cursor-not-allowed opacity-50' : 'hover:bg-accent hover:text-accent-foreground'}`} // 비활성화된 옵션 스타일 추가
                  onClick={() => handleSelect(option.value)} // 옵션 클릭 시 드롭다운이 닫히도록 설정
                >
                  <div className="text-sm">{option.label}</div> {/* 메인 라벨 */}
                  {option.description && (
                    <div className="text-xs text-gray-500 whitespace-nowrap">{option.description}</div>
                  )}
                  {/* 설명 */}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export { Select }
