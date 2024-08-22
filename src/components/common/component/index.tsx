import React, { useEffect } from 'react'
import { Copy, Zap } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'

type TComponents = {
  children?: React.ReactNode
  title?: string
  description?: string
  example?: string
  code?: string
  variant?: string
  explain?: { prop: string; type: string; default: string }[]
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
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <>
      <div className="flex items-center border-l border-r justify-between">
        <span className="border-b-2 px-6 py-2 border-sky-500 font-bold text-sm">code</span>
        <div className="flex items-center space-x-6 pr-4">
          <span className="flex justify-center rounded-full border w-[88px] h-[24px] px-1 py-0.5 text-sky-500 text-[12px]">
            Expend code
          </span>
          <Zap size={15} />
          <Copy size={15} />
        </div>
      </div>
      <div className="w-full border-b border-border rounded-b-xl bg-foreground overflow-auto">
        <pre className="object-cover">
          <code className="language-javascript">{children}</code>
        </pre>
      </div>
    </>
  )
}

export function ComponentProps({ explain }: TComponents) {
  const THead = ['Props', 'Type', 'Default']
  return (
    <>
      <h1 className="mt-8 text-2xl font-bold">Props</h1>
      <p className="mt-6 text-foreground">다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다.</p>
      <div className="my-6 w-full overflow-y-auto rounded-lg border">
        <table className="w-full overflow-hidden border-collapse border-hidden">
          <thead>
            <tr>
              {THead.map((head, index) => (
                <th key={index} className="w-1/3 px-4 py-2 text-left font-bold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {explain?.map((props) => (
              <tr>
                <td className="border-t border-b px-4 py-2 text-left">
                  <span className="rounded-sm px-1 bg-[#E6F4FE] text-[#0090FF]">{props.prop}</span>
                </td>
                <td className="border-t border-b px-4 py-2 text-left">
                  <span className="rounded-sm px-1 bg-[#E5E7EB] text-[#6A6A6A]">{props.type}</span>
                </td>
                <td className="border-t border-b px-4 py-2 text-left">
                  <span className={`rounded-sm px-1 ${props.default && 'bg-[#E5E7EB]'} text-[#6A6A6A]`}>
                    {props.default}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
