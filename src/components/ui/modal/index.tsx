'use client'

import * as React from 'react'

import useCreateContext from '@/hooks/useCreateContext'
import { cn } from '@/utils/cn'
import { X } from 'lucide-react'
import dynamic from 'next/dynamic'

const Portal = dynamic(() => import('@/components/common/portal').then((mod) => mod.Portal), { ssr: false })

type TModalContextValue = {
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
}

const [ModalProvider, useModalContext] = useCreateContext<TModalContextValue>('Modal')

/**
 * Modal 컴포넌트
 * @todos animation, asChild pattern, 최적화
 */

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <ModalProvider onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
      {children}
    </ModalProvider>
  )
}

/* -------------------------------------------------------------------------------------------------
 * ModalPortal
 * -----------------------------------------------------------------------------------------------*/

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  return <Portal>{children}</Portal>
}

/* -------------------------------------------------------------------------------------------------
 * ModalTrigger
 * -----------------------------------------------------------------------------------------------*/

const ModalTrigger = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    const { onOpen } = useModalContext('ModalTrigger')

    return <div ref={ref} onClick={onOpen} className={cn('', className)} {...props} />
  },
)

/* -------------------------------------------------------------------------------------------------
 * ModalOverlay
 * -----------------------------------------------------------------------------------------------*/

const ModalOverlay = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props} />
  },
)

/* -------------------------------------------------------------------------------------------------
 * ModalContent
 * -----------------------------------------------------------------------------------------------*/

const ModalContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ children, className, ...props }, ref) => {
    const { isOpen, onClose } = useModalContext('ModalContent')

    if (!isOpen) return null

    return (
      <ModalPortal>
        <ModalOverlay onClick={onClose} />
        <div
          ref={ref}
          className={cn(
            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg rounded-lg',
            className,
          )}
          {...props}
        >
          {children}
          <ModalClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="w-4 h-4" />
          </ModalClose>
        </div>
      </ModalPortal>
    )
  },
)

/* -------------------------------------------------------------------------------------------------
 * ModalHeader
 * -----------------------------------------------------------------------------------------------*/

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex flex-col space-y-1.5', className)} {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/

const ModalTitle = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
  },
)

/* -------------------------------------------------------------------------------------------------
 * ModalDescription
 * -----------------------------------------------------------------------------------------------*/

const ModalDescription = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('text-sm text-gray200', className)} {...props} />
  },
)

/* -------------------------------------------------------------------------------------------------
 * ModalFooter
 * -----------------------------------------------------------------------------------------------*/

const ModalFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex flex-row-reverse', className)} {...props}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * ModalClose
 * -----------------------------------------------------------------------------------------------*/

const ModalClose = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>(
  ({ className, ...props }, ref) => {
    const { onClose } = useModalContext('ModalClose')

    return <div ref={ref} className={cn('', className)} {...props} onClick={onClose} />
  },
)

export {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalClose,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
}
