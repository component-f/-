import React, { useState, ReactNode, useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  children: React.ReactNode
  className?: string
  singleOpen?: boolean
}

export function Accordion({ children, className, singleOpen = false }: AccordionProps) {
  const [expanded, setExpanded] = useState<string[]>(() => {
    const defaultExpandedItems: string[] = []

    // 기본적으로 열려 있는 패널을 설정하기 위해 초기 상태를 설정합니다.
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.props.defaultExpanded) {
        defaultExpandedItems.push(child.props.value)
      }
    })

    return defaultExpandedItems
  })

  const handleChange = (panel: string) => {
    if (singleOpen) {
      setExpanded(expanded.includes(panel) ? [] : [panel])
    } else {
      setExpanded((prevExpanded) =>
        prevExpanded.includes(panel) ? prevExpanded.filter((item) => item !== panel) : [...prevExpanded, panel],
      )
    }
  }

  return (
    <div className={twMerge('border border-border rounded-lg overflow-hidden w-[400px] accordion-shadow', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child, {
            isOpen: expanded.includes(child.props.value),
            onToggle: () => handleChange(child.props.value),
          } as Partial<AccordionItemProps>)
        }
        return child
      })}
    </div>
  )
}

type AccordionItemProps = {
  value: string
  children: React.ReactNode
  isOpen?: boolean
  onToggle?: () => void
  defaultExpanded?: boolean
  disable?: boolean
}

export function AccordionItem({ value, children, isOpen = false, onToggle, disable = false }: AccordionItemProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unusedValue = value
  const handleClick = () => {
    if (!disable && onToggle) {
      onToggle()
    }
  }

  return (
    <div className={`border-b last:border-b-0 border-border ${disable ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div onClick={handleClick}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child.type === AccordionSummary || child.type === AccordionDetails)) {
            return React.cloneElement(child, {
              isOpen,
            } as Partial<AccordionSummaryProps | AccordionDetailsProps>)
          }
          return child
        })}
      </div>
    </div>
  )
}

type AccordionSummaryProps = {
  children: React.ReactNode
  isOpen?: boolean
  onToggle?: () => void
  expandIcon?: ReactNode
}

export function AccordionSummary({ children, isOpen, onToggle, expandIcon }: AccordionSummaryProps) {
  return (
    <div className="relative p-4 flex justify-between items-center cursor-pointer" onClick={onToggle}>
      <div className="text-sm font-medium">{children}</div>
      <div
        className={twMerge(
          'flex items-center justify-center transition-transform duration-500 w-4 h-4',
          isOpen ? 'rotate-180' : '',
        )}
      >
        {expandIcon ? expandIcon : <ChevronDown className="text-[#969697]" />}
      </div>
    </div>
  )
}

type AccordionDetailsProps = {
  children: React.ReactNode
  isOpen?: boolean
}

export function AccordionDetails({ children, isOpen }: AccordionDetailsProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight)
      } else {
        setHeight(0)
      }
    }
  }, [isOpen])

  return (
    <div
      ref={contentRef}
      style={{ height: `${height}px`, transition: 'height 0.5s ease, opacity 0.5s ease' }}
      className={twMerge(
        'overflow-hidden transition-opacity duration-300 ease-in-out',
        isOpen ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="p-4">{children}</div>
    </div>
  )
}
