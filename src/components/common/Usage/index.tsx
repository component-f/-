'use client'
// react-simple-code-editor는 useRef를 사용하여 DOM 요소에 접근하기 때문에
// Next.js에서 해당 컴포넌트를 사용하는 경우 클라이언트 컴포넌트로 선언해야 함

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-funky.css'
import 'prismjs/components/prism-javascript'
import { ChevronRight } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Usage() {
  const { theme } = useTheme()

  const code = `
  import '@component-factory/theme/styles.css';
  import { Theme, Button } from '@component-factory/theme'

  export default () => (
    <Theme>
      <Button>Don't Repeat Yourself!</Button>
    </Theme>
  )
  `

  return (
    <Card className="border-none bg-transparent mr-auto shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center text-3xl">
          Start building with
          <br />
          Component Factory.
          {theme === 'dark' ? (
            <img src="images/white-logo.svg" className="w-[80px] pb-1" />
          ) : (
            <img src="images/black-logo.svg" className="w-[80px] pb-1" />
          )}
        </CardTitle>
        <CardDescription className="pt-4 text-base">
          Don't Repeat Yourself! Install now and start building smarter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Editor
          value={code}
          onValueChange={() => {}}
          highlight={(code) => Prism.highlight(code, Prism.languages.jsx, 'jsx')}
          padding={10}
          style={{
            fontSize: 13,
            backgroundColor: 'rgb(23, 26, 28)',
            color: '#ffabed',
            borderRadius: '12px',
            padding: '0px 0px 0px 10px',
            width: '500px',
          }}
        />
      </CardContent>
      <CardFooter>
        <a
          href="/docs"
          className="w-full inline-flex justify-center items-center py-2 px-4 bg-foreground text-background rounded-[8px] font-medium text-sm hover:opacity-50"
        >
          Get Started
          <ChevronRight size={17} className="ml-2" />
        </a>
      </CardFooter>
    </Card>
  )
}
