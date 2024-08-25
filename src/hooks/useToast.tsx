import { TToastProps } from '@/components/ui/toast'
import * as React from 'react'

const TOAST_LIMIT = 3
const TOAST_REMOVE_DELAY = 3000

type TToaster = TToastProps & {
  id: string
  title?: string
  description?: string
  open: boolean
  duration?: number
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

const genId = () => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: TToaster
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<TToaster>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toast: { toastId: TToaster['id']; duration?: TToaster['duration'] }
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: TToaster['id']
    }

type TState = TToaster[]

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

/**
 * 일정 시간 후 토스트를 자동으로 제거하기 위한 타이머를 등록합니다.
 * */
const addToRemoveQueue = (toastId: string, duration: number) => {
  //제거 대기열에 존재하는지 확인
  if (toastTimeouts.has(toastId)) {
    return
  }

  //일정 시간 후에 제거대기열에서 제거, 화면에서 삭제하는 타이머
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, duration)

  //제거대기열에 타이머 등록
  toastTimeouts.set(toastId, timeout)
}

/**
 * 토스트 상태를 업데이트하는 리듀서 함수입니다.
 * */
export const reducer = (state: TState, action: Action): TState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, action.toast].slice(-TOAST_LIMIT)

    case 'UPDATE_TOAST':
      return [...state.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t))]

    case 'DISMISS_TOAST': {
      const { toastId, duration = TOAST_REMOVE_DELAY } = action.toast

      if (toastId) {
        addToRemoveQueue(toastId, duration)
      } else {
        state.forEach(({ id, duration = TOAST_REMOVE_DELAY }) => {
          addToRemoveQueue(id, duration)
        })
      }

      return [
        ...state.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      ]
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return []
      }
      return [...state.filter((t) => t.id !== action.toastId)]
  }
}

const listeners: Array<(toasts: TState) => void> = []

let toasts: TState = []

/**
 * 상태를 reducer에 전달하고, 상태를 업데이트하는 dispatch 함수입니다.
 * */
function dispatch(action: Action) {
  toasts = reducer(toasts, action)
  listeners.forEach((listener) => {
    listener(toasts)
  })
}

type TToast = Omit<TToaster, 'id' | 'open'>

/**
 * 새로운 토스트를 추가하고, 업데이트 및 제거 기능을 반환하는 함수입니다.
 */
function toast(props: TToast) {
  const { duration = TOAST_REMOVE_DELAY } = props

  const id = genId()

  const update = (props: TToaster) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toast: { toastId: id, duration } })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
    },
  })

  addToRemoveQueue(id, duration)

  return { update, dismiss, id }
}

/**
 * 컴포넌트 내에서 토스트를 관리하고 상태 변화를 구독하는 커스텀 훅입니다.
 */
export function useToast() {
  const [state, setState] = React.useState<TToaster[]>(toasts)

  React.useEffect(() => {
    listeners.push(setState)

    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    toast,
    toasts: state,
  }
}
