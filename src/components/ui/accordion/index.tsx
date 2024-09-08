import React, { useState, ReactNode, useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChevronDown } from 'lucide-react'

type AccordionProps = {
  children: React.ReactNode
  className?: string
  singleOpen?: boolean
}

function Accordion({ children, className, singleOpen = false, ...props }: AccordionProps) {
  // 확장된 상태를 관리
  const [expanded, setExpanded] = useState<string[]>(() => {
    const defaultExpandedItems: string[] = []

    // 초기 확장상태 설정
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.props.defaultExpanded) {
        defaultExpandedItems.push(child.props.value)
      }
    })

    return defaultExpandedItems
  })

  //싱글오픈유무에 따른 핸들러설정
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
    <div className={twMerge('border rounded-lg overflow-hidden w-[400px] shadow', className)} {...props}>
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
  className?: string
}

function AccordionItem({
  value,
  children,
  isOpen = false,
  onToggle,
  disable = false,
  className,
  ...props
}: AccordionItemProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unusedValue = value
  const handleClick = () => {
    if (!disable && onToggle) {
      onToggle()
    }
  }

  return (
    <div
      className={twMerge(`border-b last:border-b-0 ${disable ? 'opacity-50 cursor-not-allowed' : ''}`, className)}
      {...props}
    >
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
  className?: string
}

function AccordionSummary({ children, isOpen, onToggle, expandIcon, className, ...props }: AccordionSummaryProps) {
  return (
    <div
      className={twMerge(
        'relative p-4 flex justify-between items-center cursor-pointer hover:underline hover:text-ring',
        className,
      )}
      onClick={onToggle}
      {...props}
    >
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
  className?: string
}

function AccordionDetails({ children, isOpen, className, ...props }: AccordionDetailsProps) {
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
      style={{ height: `${height}px` }}
      className={twMerge(
        'overflow-hidden transition-all duration-300 font-normal text-[14px]	',
        isOpen ? 'opacity-100' : 'opacity-0',
        className,
      )}
      {...props}
    >
      <div className="p-4">{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionSummary, AccordionDetails }
