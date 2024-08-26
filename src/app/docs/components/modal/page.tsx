'use client'

import React from 'react'
import * as Babel from '@babel/standalone'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
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
import Button from '@/components/ui/button'

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
              <ModalTitle>모달 제목</ModalTitle>
              <ModalDescription>모달 컴포넌트 설명입니다</ModalDescription>
          </ModalHeader>
          <div>모달 내용이 들어갈 영역입니다.</div>
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
      <div className="container pb-14">
        <Component>
          <ComponentExplain
            title="Modal"
            description="기본 창이나 다른 대화 상자 창 위에 겹쳐서 그 아래의 콘텐츠를 비활성화한 창입니다."
          />
          <ComponentContainer>
            <ComponentExample>{DefaultComponent}</ComponentExample>
            <ComponentExampleCode code={code} setCode={setCode} />
          </ComponentContainer>
        </Component>
      </div>
    </>
  )
}
