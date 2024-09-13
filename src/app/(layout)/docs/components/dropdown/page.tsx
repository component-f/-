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
        description="A container component for a dropdown menu."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes components inside the dropdown menu.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuTrigger"
        description="A trigger component that opens the dropdown menu."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the button or other trigger elements to open the dropdown menu.',
          },
          {
            prop: 'toggleStatusBar',
            type: '(event: React.MouseEvent) => void',
            default: '',
            description: 'Includes the button or other trigger elements to open the dropdown menu.',
          },
          {
            prop: 'buttonRef',
            type: 'React.RefObject<HTMLButtonElement>',
            default: '',
            description: 'Provides a reference to the trigger button.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuContent"
        description="A component that displays the content of the dropdown menu."
        props={[
          {
            prop: 'showStatusBar',
            type: 'boolean',
            default: 'false',
            description: 'Controls whether the dropdown menu is open.',
          },
          {
            prop: 'toggleStatusBar',
            type: '(event: React.MouseEvent) => void',
            default: '',
            description: 'A function that toggles the open/close state of the dropdown menu.',
          },
          {
            prop: 'menuRef',
            type: 'React.RefObject<HTMLDivElement>',
            default: '',
            description: 'Used to pass a reference to the menu content.',
          },
          {
            prop: 'buttonRef',
            type: 'React.RefObject<HTMLButtonElement>',
            default: '',
            description: 'Used to pass a reference to the trigger button.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the dropdown menu.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuLabel"
        description="A component that displays the label for dropdown menu items."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the label text or content.',
          },
        ]}
      />

      <ComponentPropsTable
        title="DropdownMenuItem"
        description="A component that represents each item in the dropdown menu."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed in the dropdown menu item.',
          },
          {
            prop: 'href',
            type: 'string',
            default: '',
            description:
              'The URL used when the item behaves like a link. If not specified, it will be displayed as plain text.',
          },
        ]}
      />
    </>
  )
}
