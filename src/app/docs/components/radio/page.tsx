'use client'

import { Radio } from '@/components/ui/radio'
import React, { useEffect, useState } from 'react'
import * as Babel from '@babel/standalone'
import {
  Component,
  ComponentContainer,
  ComponentExample,
  ComponentExampleCode,
  ComponentExplain,
  ComponentPropsTable,
} from '@/components/common/component'

export default function RadioPage() {
  // const [radioValue, setRadioValue] = useState('Female')
  // const [radioValue2, setRadioValue2] = useState('')
  // 본래 체크된 라디오 value를 불러오기 위해 넣은 useState
  // 코드를 코드러너에 넣자 인식이 불가, 주석처리

  //디폴트 라디오박스(가로정렬)
  const [code1, setCode1] = useState(`
    <form className="w-full max-w-xs">
      <h1 className="text-xl font-semibold py-3">Gender</h1>
      <div className="flex">
        <Radio
          label="Female"
          name="gender"
          value={'Female'}
        />
        <Radio
          label="Male"
          name="gender"
          value={'Male'}
        />
        <Radio
          label="Other"
          name="gender"
          value={'Other'}
        />
      </div>
    </form>
    `)

  //세로 정렬 라디오박스
  const [code2, setCode2] = useState(`
    <form className="flex flex-col">
        <h1 className="text-xl font-semibold py-3">Gender</h1>
        <div>
          <Radio
            label="Female"
            name="gender"
            value={'Female'}
          />
          <Radio
            label="Male"
            name="gender"
            value={'Male'}
          />
          <Radio
            label="Other"
            name="gender"
            value={'Other'}
          />
        </div>
      </form>
      `)

  //defaultChecked 라디오박스
  const [code3, setCode3] = useState(`
    <form className="w-full max-w-xs">
      <h1 className="text-xl font-semibold py-3">Gender</h1>
      <div className="flex">
        <Radio
          label="Female"
          name="gender"
          value={'Female'}
          defaultChecked
        />
        <Radio
          label="Male"
          name="gender"
          value={'Male'}
        />
        <Radio
          label="Other"
          name="gender"
          value={'Other'}
        />
      </div>
    </form>
    `)

  //disabled 라디오박스
  const [code4, setCode4] = useState(`
    <form className="w-full max-w-xs">
      <h1 className="text-xl font-semibold py-3">Gender</h1>
      <div className="flex">
        <Radio
          label="Female"
          name="gender"
          value={'Female'}
        />
        <Radio
          label="Male"
          name="gender"
          value={'Male'}
        />
        <Radio
          label="Other"
          name="gender"
          value={'Other'}
          disabled={true}
        />
      </div>
    </form>
    `)

  const [RenderedComponent1, setRenderedComponent1] = useState<JSX.Element | null>(null)
  const [RenderedComponent2, setRenderedComponent2] = useState<JSX.Element | null>(null)
  const [RenderedComponent3, setRenderedComponent3] = useState<JSX.Element | null>(null)
  const [RenderedComponent4, setRenderedComponent4] = useState<JSX.Element | null>(null)

  useEffect(() => {
    transformAndSetComponent(code1, setRenderedComponent1)
  }, [code1])

  useEffect(() => {
    transformAndSetComponent(code2, setRenderedComponent2)
  }, [code2])

  useEffect(() => {
    transformAndSetComponent(code3, setRenderedComponent3)
  }, [code3])

  useEffect(() => {
    transformAndSetComponent(code4, setRenderedComponent4)
  }, [code4])

  const transformAndSetComponent = (
    code: string,
    setComponent: React.Dispatch<React.SetStateAction<JSX.Element | null>>,
  ) => {
    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      const Component = new Function('React', 'Radio', `return ${transformedCode};`)

      const element = Component(React, Radio)

      setComponent(element)
    } catch (error) {
      console.error('Error transforming code:', error)
    }
  }

  return (
    <>
      <Component>
        <ComponentExplain
          title="Radio"
          description="A single-selection interface element that allows users to choose only one option from a given set."
        />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent1}</ComponentExample>
          <ComponentExampleCode code={code1} setCode={setCode1} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Vertical Alignment" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent2}</ComponentExample>
          <ComponentExampleCode code={code2} setCode={setCode2} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="DefaultChecked" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent3}</ComponentExample>
          <ComponentExampleCode code={code3} setCode={setCode3} />
        </ComponentContainer>
      </Component>

      <Component>
        <ComponentExplain variant="Disabled" />
        <ComponentContainer>
          <ComponentExample>{RenderedComponent4}</ComponentExample>
          <ComponentExampleCode code={code4} setCode={setCode4} />
        </ComponentContainer>
      </Component>

      <ComponentPropsTable
        title="Radio"
        description="The properties of the Radio component used to display the check state or group information of a radio button."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: 'null',
            description: 'Specifies the CSS styles for the Radio component.',
          },
          {
            prop: 'label',
            type: 'string',
            default: 'null',
            description: 'The text displayed next to the radio button.',
          },
          {
            prop: 'name',
            type: 'string',
            default: 'null',
            description: 'The group name of the radio button.',
          },
          {
            prop: 'value',
            type: 'string',
            default: 'null',
            description: 'The value of the radio button.',
          },
          {
            prop: 'onChange',
            type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
            default: 'undefined',
            description: 'Callback function called when the selection box of the radio button changes.',
          },
          {
            prop: 'defaultChecked',
            type: 'boolean',
            default: 'false',
            description: 'Determines whether the component should be initially rendered in a selected state.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Determines whether the radio button is disabled.',
          },
        ]}
      />
    </>
  )
}
