import React, { useState, useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  children: React.ReactNode
  className?: string
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={twMerge('border border-border rounded-lg overflow-hidden w-[400px] accordion-shadow', className)}>
      {children}
    </div>
  )
}

type AccordionItemProps = {
  value: string
  children: React.ReactNode
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  // eslint-disable-next-line no-console
  console.log(value)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b last:border-b-0 border-border">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && (child.type === AccordionSummary || child.type === AccordionDetails)) {
          return React.cloneElement(child as React.ReactElement<AccordionSummaryProps | AccordionDetailsProps>, {
            isOpen,
            setIsOpen,
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
  setIsOpen?: (open: boolean) => void
}

export function AccordionSummary({ children, isOpen, setIsOpen }: AccordionSummaryProps) {
  const handleClick = () => {
    if (setIsOpen) setIsOpen(!isOpen)
  }

  return (
    <div className="relative p-4 flex justify-between items-center cursor-pointer" onClick={handleClick}>
      <div className="text-sm font-medium">{children}</div>
      <div
        className={twMerge(
          'transition-transform duration-300 text-primary-hover ',
          isOpen ? 'transform rotate-180' : '',
        )}
      >
        <ChevronDown className="w-5 h-5 text-[#969697]" />
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
        'overflow-hidden transition-all duration-300 font-normal text-[14px]	',
        isOpen ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="p-4">{children}</div>
    </div>
  )
}
