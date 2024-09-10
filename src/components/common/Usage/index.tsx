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
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import LogoIcon from '/public/images/logo-icon.svg'

export default function Usage() {
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
    <div className="mt-6 xl:w-[550px] xl:m-6 xl:fixed xl:h-1/3 xl:transform xl:translate-y-1/3 z-40 pt-20">
      <Card className="border-none bg-transparent shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="flex items-center text-3xl mr-4">
            Start building with
            <br />
            Component Factory.
            <div className="hidden xl:block">
              <LogoIcon className="w-[80px] pb-1 text-foreground" alt="Logo" />
            </div>
          </CardTitle>
          <CardDescription className="pt-4 text-base">
            Don't Repeat Yourself! Install now and start building smarter.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-w-xl p-0 mt-6">
          <div className="rounded-xl border border-border">
            <Editor
              value={code}
              onValueChange={() => {}}
              highlight={(code) => Prism.highlight(code, Prism.languages.jsx, 'jsx')}
              padding={10}
              style={{
                fontSize: 12,
                backgroundColor: 'rgb(23, 26, 28)',
                color: '#ffabed',
                borderRadius: '12px',
                padding: '0px 0px 0px 10px',
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="w-full pt-6 px-0">
          <Button variant="contained" className="mr-4" endIcon={<ChevronRight size={17} />}>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button variant="outlined" className="mr-4">
            <Link href="/docs/components/accordion">View Components</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
