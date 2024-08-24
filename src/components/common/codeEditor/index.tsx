import React from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-tomorrow.css'

type TCodeEditorProps = {
  code: string
  setCode: (code: string) => void
}

export default function CodeEditor({ code, setCode }: TCodeEditorProps) {
  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={(code) => Prism.highlight(code, Prism.languages.jsx, 'jsx')}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        backgroundColor: '#2d2d2d',
        color: '#fff',
      }}
    />
  )
}
