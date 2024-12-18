'use client'

import { Avatar } from '@/components/ui/avatar'
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
          description="Avatars are found throughout material design with uses in everything from tables to dialog menus."
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
        description="the properties of the avatar component used to display the user's profile picture or icon."
        props={[
          {
            prop: 'src',
            type: 'string',
            default: '',
            description: 'URL of the image to display on the avatar.',
          },
          {
            prop: 'alt',
            type: 'string',
            default: '',
            description: 'Alternative text to display when the image does not load.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'CSS class for additional styling.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: `If you don't have an image, include your initials or an icon to display within your avatar.`,
          },
        ]}
      />
    </>
  )
}
