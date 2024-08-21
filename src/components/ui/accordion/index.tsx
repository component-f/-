import React, { useState, useRef, useEffect, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  children: React.ReactNode
  className?: string
  singleOpen?: boolean
}

export function Accordion({ children, className, singleOpen }: AccordionProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [openItems, setOpenItems] = useState<string[]>([])

  const handleToggle = (value: string) => {
    if (singleOpen) {
      setActiveItem(activeItem === value ? null : value)
    } else {
      setOpenItems((prevItems) =>
        prevItems.includes(value) ? prevItems.filter((item) => item !== value) : [...prevItems, value],
      )
    }
  }

  return (
    <div className={twMerge('border border-border rounded-lg overflow-hidden w-[400px] accordion-shadow', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
            isOpen: singleOpen ? activeItem === child.props.value : openItems.includes(child.props.value),
            onToggle: () => handleToggle(child.props.value),
          })
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
}

export function AccordionItem({ value, children, isOpen, onToggle }: AccordionItemProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unusedValue = value // 이 줄은 ESLint 경고를 방지합니다.

  return (
    <div className="border-b last:border-b-0 border-border">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && (child.type === AccordionSummary || child.type === AccordionDetails)) {
          return React.cloneElement(child as React.ReactElement<AccordionSummaryProps | AccordionDetailsProps>, {
            isOpen,
            onToggle,
          })
        }
        return child
      })}
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
          'flex items-center justify-center transition-transform duration-300 w-4 h-4',
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
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      ref={contentRef}
      style={{ height: `${height}px` }}
      className={twMerge(
        'overflow-hidden transition-all duration-300 font-normal text-[14px]',
        isOpen ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="p-4">{children}</div>
    </div>
  )
}
