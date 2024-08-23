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
            default: '',
          },
          {
            prop: 'description',
            type: 'string',
            default: '',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
          },
          {
            prop: 'btn',
            type: '() => void',
            default: '',
          },
          {
            prop: 'btnMsg',
            type: 'string',
            default: '',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: '',
          },
        ]}
      />
    </>
  )
}
