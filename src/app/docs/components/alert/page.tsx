'use client'

import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentProps,
} from '@/components/common/component'
import Alert from '@/components/ui/alert'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbText,
} from '@/components/ui/breadcrumb'
import { CircleCheckBig, Ban } from 'lucide-react'

export default function AlertPage() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbText>Alert</BreadcrumbText>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Component>
        <ComponentExplain title="Alert" description="사용자의 주의를 끌기 위한 콜아웃을 표시합니다." />
        <ComponentContainer>
          <ComponentExample>
            <Alert className="" title="Default title" btn={() => alert('Undo action')} icon={<CircleCheckBig />}>
              This is Success alert
            </Alert>
          </ComponentExample>
          <ComponentExampleCode>
            {`
<Alert className="" title="Default title" btn={() => alert('Undo action')} icon={<CircleCheckBig />}>
  This is Success alert
</Alert>
            `}
          </ComponentExampleCode>
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Custom" />
        <ComponentContainer>
          <ComponentExample>
            <Alert
              className="w-[250px] bg-sky-500 text-white h-20"
              title="정말로"
              btn={() => alert('아니요')}
              btnMsg="Yes"
            >
              집에 가도 되나요?
            </Alert>
          </ComponentExample>
          <ComponentExampleCode>
            {`
<Alert
  className="w-[250px] bg-sky-500 text-white h-20"
  title="정말로"
  btn={() => alert('아니요')}
  btnMsg="Yes"
>
  집에 가도 되나요?
</Alert>
            `}
          </ComponentExampleCode>
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Custom2" />
        <ComponentContainer>
          <ComponentExample>
            <Alert className="w-1/3 bg-red-500 text-white h-20" title="꺄아악" icon={<Ban size={35} />}>
              오류입니다.
            </Alert>
          </ComponentExample>
          <ComponentExampleCode>
            {`
<Alert className="w-1/3 bg-red-500 text-white h-20" title="꺄아악" icon={<Ban size={35} />}>
  오류입니다.
</Alert>
            `}
          </ComponentExampleCode>
        </ComponentContainer>
      </Component>

      <ComponentProps
        explain={[
          {
            prop: 'title',
            type: 'string',
            description: '알림의 제목을 설정합니다.',
          },
          {
            prop: 'description',
            type: 'string',
            description: '알림의 세부 설명을 입력합니다.',
          },
          {
            prop: 'className',
            type: 'string',
            description: 'Tailwind CSS 클래스를 추가하여 스타일을 커스터마이즈합니다.',
          },
          {
            prop: 'btn',
            type: '() => void',
            description: '버튼 클릭 시 호출할 함수를 정의합니다.',
          },
          {
            prop: 'btnMsg',
            type: 'string',
            description: '버튼에 표시할 텍스트를 설정합니다.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            description: '알림에 표시할 아이콘 컴포넌트를 설정합니다.',
          },
        ]}
      />
    </>
  )
}
