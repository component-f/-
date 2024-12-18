'use client'

import React from 'react'
import * as Babel from '@babel/standalone'

import { useToast } from '@/hooks/useToast'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'
import { Button } from '@/components/ui/button'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
/**
 * Toast 컴포넌트 문서 페이지 컴포넌트
 */
export default function ToastPage() {
  const { toast } = useToast()

  const [defaultCode, setDefaultCode] = React.useState(`
  <Button
      variant="outlined" 
      type="button"
      onClick={() => {
          toast({ 
              title: 'Scheduled: Catch up ', 
              description: 'Friday, February 10, 2023 at 5:57 PM', 
          })
      }}
  >
      show Toast
  </Button>
  `)

  const [simpleCode, setSimpleCode] = React.useState(`
  <Button
      variant="outlined" 
      type="button"
      onClick={() => {
          toast({ 
              title: 'Your message has been sent.', 
          })
      }}
  >
      show Toast
  </Button>
  `)

  const [destructiveCode, setDestructiveCode] = React.useState(`
  <Button
      variant="outlined" 
      type="button"
      onClick={() => {
          toast({ 
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
          })
      }}
  >
      show Toast
  </Button>
  `)

  const [DefaultComponent, setDefaultComponent] = React.useState<JSX.Element | null>(null)
  const [SimpleComponent, setSimpleComponent] = React.useState<JSX.Element | null>(null)
  const [DestructiveComponent, setDestructiveComponent] = React.useState<JSX.Element | null>(null)

  React.useEffect(() => {
    transformAndSetComponent(defaultCode, setDefaultComponent)
  }, [defaultCode])

  React.useEffect(() => {
    transformAndSetComponent(simpleCode, setSimpleComponent)
  }, [simpleCode])

  React.useEffect(() => {
    transformAndSetComponent(destructiveCode, setDestructiveComponent)
  }, [destructiveCode])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Button', 'toast', `return ${transformedCode};`)

      const element = Component(React, Button, toast)

      setComponent(element)
    } catch (error) {
      console.error('Error rendering component:', error)
      setComponent(<>컴포넌트를 렌더링 하는 데 실패했습니다.</>)
    }
  }

  const installCode = {
    install: `npm com-fac@latest add toast`,
    addToaster: `
  import { Toaster } from "@/components/ui/toaster"
 
  export default function RootLayout({ children }) {
      return (
          <html lang="en">
              <head />
              <body>
                  <main>{children}</main>
                  <Toaster />
              </body>
          </html>
      )
  }
  `,
    usageImport: `
  import { useToast } from '@/hooks/useToast'
  `,
    usageToast: `
  export default function ToastPage() {
      const { toast } = useToast()

      return(
          <Button
              variant="outlined" 
              type="button"
              onClick={() => {
                  toast({ 
                      title: 'Scheduled: Catch up ', 
                      description: 'Friday, February 10, 2023 at 5:57 PM', 
                  })
              }}
          >
            show Toast
          </Button>
      )
  }
`,
  }

  return (
    <>
      <Component>
        <ComponentExplain title="Toast" description="A succinct message that is displayed temporarily." />
        <ComponentContainer>
          <ComponentExample>{DefaultComponent}</ComponentExample>
          <ComponentExampleCode code={defaultCode} setCode={setDefaultCode} />
        </ComponentContainer>
      </Component>

      <div>
        <div className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </div>
        <div>
          <div className="font-heading mt-8 scroll-m-20 text-md font-medium tracking-tight">
            1. Run the following command:
          </div>
          <div className="w-full border rounded-xl bg-foreground overflow-auto mt-4">
            <Editor
              value={installCode.install}
              highlight={(code) => highlight(code, languages.jsx, 'jsx')}
              padding={10}
              className="text-md text-white"
              readOnly={true}
              onValueChange={() => {}}
              style={{
                backgroundColor: '#212121',
              }}
            />
          </div>
        </div>

        <div>
          <div className="font-heading mt-8 scroll-m-20 text-md font-medium tracking-tight">
            2. Add the Toaster component
          </div>
          <div className="w-full  rounded-xl bg-foreground overflow-auto mt-4 border">
            <Editor
              value={installCode.addToaster}
              highlight={(code) => highlight(code, languages.jsx, 'jsx')}
              padding={10}
              className="text-md text-white"
              readOnly={true}
              onValueChange={() => {}}
              style={{
                backgroundColor: '#212121',
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Usage</div>
        <div>
          <div className="font-heading mt-8 scroll-m-20 text-md font-medium tracking-tight">
            The useToast hook returns a toast function that you can use to display a toast.
          </div>
          <div>
            <div className="w-full  rounded-xl bg-foreground overflow-auto mt-4 border">
              <Editor
                value={installCode.usageImport}
                highlight={(code) => highlight(code, languages.jsx, 'jsx')}
                padding={10}
                className="text-md text-white"
                readOnly={true}
                onValueChange={() => {}}
                style={{
                  backgroundColor: '#212121',
                }}
              />
            </div>
            <div className="w-full  rounded-xl bg-foreground overflow-auto mt-4 border">
              <Editor
                value={installCode.usageToast}
                highlight={(code) => highlight(code, languages.jsx, 'jsx')}
                padding={10}
                className="text-md text-white"
                readOnly={true}
                onValueChange={() => {}}
                style={{
                  backgroundColor: '#212121',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Component>
        <ComponentExplain variant="Simple" />
        <ComponentContainer>
          <ComponentExample>{SimpleComponent}</ComponentExample>
          <ComponentExampleCode code={simpleCode} setCode={setSimpleCode} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Destructive" />
        <ComponentContainer>
          <ComponentExample>{DestructiveComponent}</ComponentExample>
          <ComponentExampleCode code={destructiveCode} setCode={setDestructiveCode} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        description="다음 속성을 사용하여 툴팁을 맞춤 설정할 수 있습니다."
        props={[
          {
            prop: 'variant',
            type: `"default" | "destructive"`,
            default: 'default',
            description: 'The variant to use.',
          },
          {
            prop: 'title',
            type: `string`,
            default: '',
            description: 'The title to display.',
          },
          {
            prop: 'description',
            type: `string`,
            default: '',
            description: 'The description to display.',
          },
          {
            prop: 'duration',
            type: `string`,
            default: '3000',
            description: 'The time in milliseconds that should elapse before automatically closing each toast.',
          },
        ]}
      />
    </>
  )
}
