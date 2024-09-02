import React from 'react'
import * as Babel from '@babel/standalone'

type Dependencies = {
  [key: string]: any
}

export const transformAndSetComponent = (
  code: string,
  setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  dependencies: Dependencies,
) => {
  try {
    const transformedCode = Babel.transform(code, {
      presets: ['react'],
    }).code

    const dependencyKeys = Object.keys(dependencies)
    const dependencyValues = Object.values(dependencies)

    const Component = new Function('React', ...dependencyKeys, `return ${transformedCode};`)

    const element = Component(React, ...dependencyValues)

    setComponent(element)
  } catch (error) {
    setComponent(React.createElement('div', { style: { color: 'red' } }, '컴포넌트를 렌더링 하는 데 실패했습니다.'))
  }
}
