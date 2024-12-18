import React from 'react'
import { ComponentPropsTable } from '@/components/common/component'
import { AlertDefaultExample, AlertErrorExample, AlertVariantExample } from '@/components/ui/alert/alertDefaultExample'

export default function AlertPage() {
  return (
    <>
      <AlertDefaultExample />
      <AlertVariantExample />
      <AlertErrorExample />

      <ComponentPropsTable
        title="Alert"
        description="The properties of the Alert component used to display warning or informational messages. The Alert component can contain children such as AlertHeader, AlertTitle, AlertDescription, and AlertButton."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the Alert component.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default: '',
            description: 'Specifies the icon to be displayed on the left side of the Alert.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description:
              'The content inside the Alert, which can include components like AlertHeader, AlertTitle, AlertDescription, and AlertButton.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertHeader"
        description="The properties of the AlertHeader component which wraps the title and description."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertHeader component.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content inside the AlertHeader, typically includes AlertTitle and AlertDescription.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertTitle"
        description="The properties of the AlertTitle component which represents the title of the Alert."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertTitle component.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content of the title.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertDescription"
        description="The properties of the AlertDescription component which provides additional details about the Alert."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertDescription component.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content of the description.',
          },
        ]}
      />

      <ComponentPropsTable
        title="AlertButton"
        description="The properties of the AlertButton component, which represents the button inside the Alert."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Specifies additional CSS classes for the AlertButton component.',
          },
          {
            prop: 'onClick',
            type: '() => void',
            default: '',
            description: 'The function that is called when the button is clicked.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The content of the button, typically a text label.',
          },
        ]}
      />
    </>
  )
}
