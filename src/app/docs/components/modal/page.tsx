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

/**
 * Modal 컴포넌트에 대한 문서 페이지 컴포넌트
 * @todos 현재 테스트용 임시 제작, 추후 수정 예정 - 스타일, 세부내용, 코드 리팩토링
 */
export default function ModalPage() {
  return (
    <>
      <Modal>
        <ModalTrigger>
          <button type="button" className="bg-foreground text-background py-2 px-4 rounded-lg">
            Modal open
          </button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Modal</ModalTitle>
            <ModalDescription>모달 컴포넌트입니다</ModalDescription>
          </ModalHeader>
          <div>모달 내용이 들어갈 영역입니다.</div>
          <ModalFooter>
            <ModalClose>
              <button type="button" className="bg-foreground text-background py-2 px-4 rounded-lg">
                close
              </button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <pre>
        <code>
          {`<Modal>
        <ModalTrigger>
          <button type="button" className="bg-foreground text-background py-2 px-4 rounded-lg">
            Modal open
          </button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Modal</ModalTitle>
            <ModalDescription>모달 컴포넌트입니다</ModalDescription>
          </ModalHeader>
          <div>모달 내용이 들어갈 영역입니다.</div>
          <ModalFooter>
            <ModalClose>
              <button type="button" className="bg-foreground text-background py-2 px-4 rounded-lg">
                close
              </button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
              `}
        </code>
      </pre>
    </>
  )
}
