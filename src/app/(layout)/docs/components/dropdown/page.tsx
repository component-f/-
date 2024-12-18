import React from 'react'
import { ComponentPropsTable } from '@/components/common/component'
import { DropdownDefaultExample, DropdownRadioExample } from '@/components/ui/dropdown/dropdownExample'

export default function DropdownPage() {
  return (
    <>
      <DropdownDefaultExample />
      <DropdownRadioExample />

      <ComponentPropsTable
        title="DropdownMenu"
        description="Wraps the dropdown trigger and content."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Content inside the DropdownMenu.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuTrigger"
        description="Toggles the dropdown menu on click."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'The trigger element to open/close the dropdown.',
          },
          {
            prop: 'keyId',
            type: 'string',
            default: '',
            description: 'Unique key to control dropdown state.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'CSS classes for styling the trigger.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuContent"
        description="Holds the content of the dropdown."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Content displayed inside the dropdown.',
          },
          {
            prop: 'keyId',
            type: 'string',
            default: '',
            description: 'Unique key to control content visibility.',
          },
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'CSS classes for styling the content.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuLabel"
        description="Displays a label in the dropdown."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Label text or content.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuItem"
        description="Represents an item in the dropdown."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Content inside the dropdown item.',
          },
          {
            prop: 'href',
            type: 'string',
            default: '',
            description: 'URL for making the item a link.',
          },
        ]}
      />
    </>
  )
}
