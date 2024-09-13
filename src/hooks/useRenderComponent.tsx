import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { transformAndSetComponent } from '../utils/transformAndSetComponent'
import { TComponentMap } from '@/types/componentMap'

const useRenderComponent = (code: string, setCode: Dispatch<SetStateAction<string>>, componentMap: TComponentMap) => {
  const [renderedComponent, setRenderedComponent] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code, setRenderedComponent, componentMap)
  }, [code])

  return { renderedComponent, setCode }
}

export default useRenderComponent
