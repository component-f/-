import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import { highlight, languages } from 'prismjs'
import { Copy, CopyCheck, Zap } from 'lucide-react'

type TComponents = {
  children?: React.ReactNode
  title?: string
  description?: string
  example?: string
  code?: string
  variant?: string
  props?: { prop: string; type: string; default: string; description: string }[]
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
  return <div className="w-full border py-20 flex items-center justify-center rounded-t-xl">{children}</div>
}

export function ComponentExampleCode({ code, setCode }: { code: string; setCode: Dispatch<SetStateAction<string>> }) {
  const [copied, setCopied] = useState(false)
  const [expend, setExpend] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const handleExpendToggle = () => {
    setExpend((prev) => !prev)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code as string)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <>
      <div className="flex items-center border-l border-r justify-between">
        <span className="border-b-2 px-6 py-2 border-sky-500 font-bold text-sm">code</span>
        <div className="flex items-center space-x-6 pr-4">
          <span
            className="flex justify-center rounded-full border text-[#0090FF] h-[24px] px-1 py-0.5 text-[12px] cursor-pointer hover:border-[#0090FF]"
            onClick={handleExpendToggle}
          >
            {expend ? 'Collapsed code' : 'Expend code'}
          </span>
          <Zap size={15} />
          <div className="flex items-center justify-center w-[20px]">
            {copied ? (
              <CopyCheck size={20} className="text-[#0090FF]" />
            ) : (
              <Copy size={15} onClick={handleCopy} className="hover:text-[#0090FF] cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <div className="w-full rounded-b-xl bg-foreground overflow-auto hover:ring-4 ring-[#0090FF]">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.jsx, 'jsx')}
          padding={10}
          className="text-md text-white"
        />
      </div>
    </>
  )
}

export function ComponentPropsTable({ title, description, props }: TComponents) {
  const THead = ['Prop', 'Type', 'Default', 'Description']
  return (
    <>
      <h1 className="mt-8 text-2xl font-bold">{title ? title : 'Props'}</h1>
      <p className="mt-6 text-foreground">
        {description ? description : '다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다.'}
      </p>
      <div className="my-6 w-full overflow-y-auto rounded-lg border">
        <table className="w-full overflow-hidden border-collapse border-hidden">
          <thead>
            <tr>
              {THead.map((head, index) => (
                <th key={index} className="w-1/4 px-4 py-2 text-left font-bold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props?.map((prop, index) => (
              <tr key={index}>
                <td className="border-t border-b px-4 py-2 text-left">
                  <span className="rounded-sm px-1 bg-[#E6F4FE] text-[#0090FF]">{prop.prop}</span>
                </td>
                <td className="border-t border-b px-4 py-2 text-left">
                  <span className="rounded-sm px-1 bg-[#E5E7EB] text-[#6A6A6A]">{prop.type}</span>
                </td>
                <td className="border-t border-b px-4 py-2 text-left">
                  <span className={'rounded-sm px-1 bg-[#E5E7EB] text-[#6A6A6A]'}>{prop.default || '-'}</span>
                </td>
                <td className="border-t border-b px-4 py-2 text-left">
                  <span className="rounded-sm px-1 bg-[#E5E7EB] text-[#6A6A6A]">{prop.description}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
