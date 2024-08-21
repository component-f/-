import React from 'react'
import { Copy, Zap } from 'lucide-react'

type TComponents = {
  children?: React.ReactNode
  title?: string
  description?: string
  example?: string
  code?: string
  variant?: string
  explain?: { prop: string; type: string; description: string }[]
}

export function Component({ children }: TComponents) {
  return <>{children}</>
}
export function ComponentExplain({ title, description, variant }: TComponents) {
  return (
    <>
      {variant ? (
        <h2 className="flex space-x-2 font-bold mt-8">
          <span className="text-border">#</span>
          <span className="text-foreground">{variant}</span>
        </h2>
      ) : (
        <>
          <h1 className="mt-8 text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-lg text-gray200">{description}</p>
        </>
      )}
    </>
  )
}

export function ComponentContainer({ children }: TComponents) {
  return <div className="flex flex-col mt-4">{children}</div>
}

export function ComponentExample({ children }: TComponents) {
  return <div className="w-full border border-border h-60 item-middle rounded-t-xl">{children}</div>
}

export function ComponentExampleCode({ children }: TComponents) {
  return (
    <>
      <div className="flex items-center border-l border-r justify-between">
        <span className="border-b-2 px-6 py-2 border-sky-500 font-bold">code</span>
        <div className="flex items-center space-x-6 pr-4">
          <span className="rounded-full border px-2 py-0.5 text-sky-500">Expend code</span>
          <Zap size={15} />
          <Copy size={15} />
        </div>
      </div>
      <div className="w-full border-b border-border px-8 rounded-b-xl bg-foreground overflow-auto">
        <pre>
          <code className="text-background">{children}</code>
        </pre>
      </div>
    </>
  )
}

export function ComponentProps({ explain }: TComponents) {
  const THead = ['Props', 'Type', 'Description']
  return (
    <>
      <h1 className="mt-8 text-2xl font-bold">Props</h1>
      <p className="mt-6 text-foreground">다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다.</p>
      <div className="my-6 w-full overflow-y-auto rounded-lg">
        <table className="w-full overflow-hidden rounded-lg">
          <thead>
            <tr>
              {THead.map((head, index) => (
                <th key={index} className="border px-4 py-2 text-left font-bold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {explain?.map((props) => (
              <tr>
                <td className="border px-4 py-2 text-left">{props.prop}</td>
                <td className="border px-4 py-2 text-left">{props.type}</td>
                <td className="border px-4 py-2 text-left">{props.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
