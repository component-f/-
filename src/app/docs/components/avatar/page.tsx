'use client'

import Avatar from '@/components/ui/avatar'
import { FolderIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import * as Babel from '@babel/standalone'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

export default function AvatarPage() {
  const [code1, setCode1] = useState(`<Avatar src="/images/logo.svg" alt="logo" />`)

  const [code2, setCode2] = useState(`
    <div className="flex space-x-2">
      <Avatar>A</Avatar>
      <Avatar className="bg-red-500">CF</Avatar>
    </div>
  `)

  const [code3, setCode3] = useState(`
    <Avatar className="bg-[#EF4444] ">
      <FolderIcon />
    </Avatar>
  `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1])

  useEffect(() => {
    transformAndSetComponent(code2, setRenderedComponent2)
  }, [code2])

  useEffect(() => {
    transformAndSetComponent(code3, setRenderedComponent3)
  }, [code3])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Avatar', 'FolderIcon', `return ${transformedCode};`)

      const element = Component(React, Avatar, FolderIcon)

      setComponent(element)
    } catch (error) {
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain
          title="Avatar"
          description="머티리얼 디자인 전반에서 발견되며, 표부터 대화 상자 메뉴에 이르기까지 모든 곳에서 사용됩니다."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Letter" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Icons" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Avatar"
        description="사용자의 프로필 사진이나 아이콘을 표시하는 데 사용되는 아바타 컴포넌트의 속성입니다."
        props={[
          {
            prop: 'src',
            type: 'string',
            default: '',
            description: '아바타에 표시할 이미지의 URL입니다.',
          },
          {
            prop: 'alt',
            type: 'string',
            default: '',
            description: '이미지가 로드되지 않을 때 표시할 대체 텍스트입니다.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: '추가적인 스타일을 지정하기 위한 CSS 클래스입니다.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: '이미지가 없는 경우 아바타 내에 표시할 이니셜이나 아이콘을 포함합니다.',
          },
        ]}
      />
    </>
  )
}
