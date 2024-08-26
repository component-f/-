import * as React from 'react'

export default function useCreateContext<ContextValueType>(
  rootComponentName: string,
  defaultContext?: ContextValueType,
) {
  const Context = React.createContext<ContextValueType | undefined>(defaultContext)

  function Provider(props: ContextValueType & { children: React.ReactNode }) {
    const { children, ...context } = props
    const value = context as ContextValueType

    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  function useContext(consumerName: string) {
    const context = React.useContext(Context)
    if (context) return context
    if (defaultContext !== undefined) return defaultContext

    throw new Error(`${consumerName}는 ${rootComponentName} 내부에서만 사용할 수 있습니다.`)
  }

  Provider.displayName = rootComponentName + 'Provider'
  return [Provider, useContext] as const
}
