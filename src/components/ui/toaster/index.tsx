'use client'

import { useToast } from '@/hooks/useToast'
import { Toast, ToastTitle, ToastDescription, ToastPortal } from '@/components/ui/toast'

const Toaster = () => {
  const { toasts } = useToast()

  return (
    <ToastPortal>
      {toasts.map(({ id, title, description, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
          </Toast>
        )
      })}
    </ToastPortal>
  )
}

export { Toaster }
