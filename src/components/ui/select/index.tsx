import React, { useState, useEffect, useRef } from 'react'

interface Option {
  label: string
  value: string
  description?: string // 설명 필드 추가
}

interface SelectProps {
  options: Option[]
  onSelect: (value: string) => void
  className?: string
  defaultSelected?: string
}

const Select: React.FC<SelectProps> = ({ options, onSelect, className, defaultSelected }) => {
  const [selectedValue, setSelectedValue] = useState(defaultSelected || options[0].value)
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined)
  const selectRef = useRef<HTMLDivElement>(null) // 전체 Select 컴포넌트를 참조
  const textMeasureRef = useRef<HTMLDivElement>(null) // 옵션 크기 체크용

  useEffect(() => {
    if (defaultSelected) {
      setSelectedValue(defaultSelected)
    }
  }, [defaultSelected])

  useEffect(() => {
    if (selectRef.current && textMeasureRef.current) {
      const selectWidth = selectRef.current.offsetWidth
      const textMeasureWidth = textMeasureRef.current.offsetWidth
      setDropdownWidth(Math.max(selectWidth, textMeasureWidth + 20)) // 가장 긴 옵션 텍스트의 너비 값으로 설정
    }
  }, [selectRef.current, textMeasureRef.current, options])

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
    setSelectedValue(value)
    setIsOpen(false) // 옵션 선택 시 드롭다운 닫기
    onSelect(value)
  }

  return (
    <div ref={selectRef} className={`relative inline-block ${className}`}>
      <button
        className="px-4 py-2 text-left border rounded-md shadow-sm ring-offset-background
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring text-sm
        w-auto pr-8 relative overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
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
          className="absolute z-10 mt-1 border rounded-md shadow-lg bg-white"
          style={{ minWidth: dropdownWidth, right: 0 }} // 드롭다운을 Select 박스 오른쪽 끝에 맞춤
        >
          <ul className="py-1 text-sm">
            {options.map((option) => (
              <li
                key={option.value}
                className={`cursor-pointer px-4 py-2 ${
                  option.value === selectedValue ? 'bg-gray-200' : ''
                } hover:bg-accent hover:text-accent-foreground`}
                onClick={() => handleSelect(option.value)} // 옵션 클릭 시 드롭다운이 닫히도록 설정
              >
                <div className="font-medium">{option.label}</div> {/* 메인 라벨 */}
                {option.description && <div className="text-xs text-gray-500">{option.description}</div>} {/* 설명 */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 텍스트 길이를 측정하기 위한 숨겨진 요소 */}
      <div ref={textMeasureRef} className="absolute invisible z-[-1] whitespace-nowrap">
        {options.map((option) => (
          <div key={option.value}>
            <div className="font-medium">{option.label}</div>
            {option.description && <div className="text-xs text-gray-500">{option.description}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export { Select }
