'use client'

import React from 'react'
import * as Babel from '@babel/standalone'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTrigger,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from '@/components/ui/modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * Modal 컴포넌트에 대한 문서 페이지 컴포넌트
 * @todos 현재 테스트용 임시 제작, 추후 수정 예정 - 스타일, 세부내용, 코드 리팩토링
 */
export default function ModalPage() {
  const [code, setCode] = React.useState(`
  <Modal>
      <ModalTrigger>
          <Button type="button" variant="outlined">
              Modal open
          </Button>
      </ModalTrigger>
      <ModalContent>
          <ModalHeader>
              <ModalTitle>Edit profile</ModalTitle>
              <ModalDescription>Make changes to your profile here. Click save when you're done.</ModalDescription>
          </ModalHeader>
              <div className='flex gap-2 items-center'>
                  <Label className='w-20'>Name</Label>
                  <Input placeholder="Name" />
              </div>
          <ModalFooter>
              <ModalClose>
                  <Button type="button" variant="contained">
                      close
                  </Button>
              </ModalClose>
          </ModalFooter>
      </ModalContent>
  </Modal>
  `)

  const [DefaultComponent, setDefaultComponent] = React.useState<JSX.Element | null>(null)

  React.useEffect(() => {
    transformAndSetComponent(code, setDefaultComponent)
  }, [code])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function(
        'React',
        'Label',
        'Input',
        'Modal',
        'ModalClose',
        'ModalContent',
        'ModalTrigger',
        'ModalHeader',
        'ModalFooter',
        'ModalTitle',
        'ModalDescription',
        'Button',
        `return ${transformedCode};`,
      )

      const element = Component(
        React,
        Label,
        Input,
        Modal,
        ModalClose,
        ModalContent,
        ModalTrigger,
        ModalHeader,
        ModalFooter,
        ModalTitle,
        ModalDescription,
        Button,
      )

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }
  return (
    <>
      <Component>
        <ComponentExplain
          title="Modal"
          description="A window overlaid on either the primary window or another modal window, rendering the content underneath inert."
        />
        <ComponentContainer>
          <ComponentExample>{DefaultComponent}</ComponentExample>
          <ComponentExampleCode code={code} setCode={setCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Modal"
        description="Contains all the parts of a modal."
        props={[
          {
            prop: 'defaultOpen',
            type: 'boolean',
            default: 'false',
            description: 'The open state of the modal when it is initially rendered.',
          },
        ]}
      />

      <ComponentPropsTable
        title="ModalTrigger"
        description="The button that opens the modal."
        props={[
          {
            prop: 'children',
            type: 'node',
            default: 'false',
            description: 'The content of the component.',
          },
        ]}
      />

      <ComponentPropsTable
        title="ModalContent"
        description="Contains content to be rendered in the open modal."
        props={[
          {
            prop: 'children',
            type: 'node',
            default: 'false',
            description: 'The content of the component.',
          },
        ]}
      />

      <ComponentPropsTable
        title="ModalHeader"
        description="Contains header to be rendered in the open modal."
        props={[
          {
            prop: 'children',
            type: 'node',
            default: 'false',
            description: 'The content of the component.',
          },
        ]}
      />

      <ComponentPropsTable
        title="ModalTitle"
        description="An accessible title to be announced when the modal is opened."
        props={[
          {
            prop: 'children',
            type: 'node',
            default: 'false',
            description: 'The content of the component.',
          },
        ]}
      />

      <ComponentPropsTable
        title="ModalDescription"
        description="An optional accessible description to be announced when the modal is opened."
        props={[
          {
            prop: 'children',
            type: 'node',
            default: 'false',
            description: 'The content of the component.',
          },
        ]}
      />

      <ComponentPropsTable
        title="ModalFooter"
        description="Contains footer to be rendered in the open modal."
        props={[
          {
            prop: 'children',
            type: 'node',
            default: 'false',
            description: 'The content of the component.',
          },
        ]}
      />

      <ComponentPropsTable
        title="ModalClose"
        description="The button that closes the modal."
        props={[
          {
            prop: 'children',
            type: 'node',
            default: 'false',
            description: 'The content of the component.',
          },
        ]}
      />
    </>
  )
}
