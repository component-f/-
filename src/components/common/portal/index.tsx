import React from 'react'
import { cn } from '@/utils/cn'
import { createPortal } from 'react-dom'

export type TPortalProps = React.HTMLAttributes<HTMLDivElement>

function Portal({ className, children, ...props }: TPortalProps) {
  return createPortal(
    <div className={cn('', className)} {...props}>
      {children}
    </div>,
    document.body,
  )
}

export { Portal }
