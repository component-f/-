'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'

import createContext from '@/utils/createContext'
import { cn } from '@/utils/cn'
import { X } from 'lucide-react'

const MODAL_NAME = 'Modal'

type TModalContextValue = {
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
}

const [ModalProvider, useModalContext] = createContext<TModalContextValue>(MODAL_NAME)

interface IDivProps extends React.ComponentPropsWithRef<'div'> {
  children?: React.ReactNode
}

interface IButtonProps extends React.ComponentPropsWithRef<'button'> {
  children?: React.ReactNode
}

/**
 * 모달 컴포넌트
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

function ModalPortal({ children }: { children: React.ReactNode }) {
  return createPortal(<div>{children}</div>, document.body)
}

const ModalTrigger = ({ children, className, ...props }: IDivProps) => {
  const { onOpen } = useModalContext('ModalTrigger')

  return (
    <div className={cn('', className)} onClick={onOpen} {...props}>
      {children}
    </div>
  )
}

const ModalOverlay = React.forwardRef<HTMLDivElement, IDivProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props}></div>
})

const ModalContent = React.forwardRef<HTMLDivElement, IDivProps>(({ children, className, ...props }, ref) => {
  const { isOpen, onClose } = useModalContext('ModalContent')

  if (!isOpen) return null

  return (
    <div>
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
    </div>
  )
})

const ModalHeader = ({ children, className, ...props }: IDivProps) => {
  return (
    <div className={cn('flex flex-col space-y-1.5', className)} {...props}>
      {children}
    </div>
  )
}

const ModalTitle = React.forwardRef<HTMLDivElement, IDivProps>(({ children, className, ...props }: IDivProps) => {
  return (
    <div className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </div>
  )
})

const ModalDescription = React.forwardRef<HTMLDivElement, IDivProps>(({ children, className, ...props }: IDivProps) => {
  return (
    <div className={cn('text-sm text-gray200', className)} {...props}>
      {children}
    </div>
  )
})

const ModalFooter = ({ children, className, ...props }: IDivProps) => {
  return (
    <div className={cn('flex flex-row-reverse', className)} {...props}>
      {children}
    </div>
  )
}

const ModalClose = React.forwardRef<HTMLButtonElement, IButtonProps>(({ className, ...props }, ref) => {
  const { onClose } = useModalContext('ModalClose')

  return <button className={cn('', className)} {...props} onClick={onClose} ref={ref}></button>
})

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
