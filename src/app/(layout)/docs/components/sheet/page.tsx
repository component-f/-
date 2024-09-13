import React from 'react'
import { ComponentPropsTable } from '@/components/common/component'
import { SheetDefaultExample } from '@/components/ui/sheet/sheetExample'

export default function SheetPage() {
  return (
    <>
      <SheetDefaultExample />
      <ComponentPropsTable
        title="Sheet"
        description="A component used for composing a sheet for tasks like editing profiles."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetTrigger"
        description="Properties of the trigger button used to open the Sheet component."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes content to act as the trigger element for opening the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetContent"
        description="Properties of the component that contains the content inside the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the sheet.',
          },
          {
            prop: 'sheet',
            type: 'boolean',
            default: 'false',
            description: 'Used to control the visibility of the sheet.',
          },
          {
            prop: 'toggleSheet',
            type: '() => void',
            default: '',
            description: 'A function to toggle the opening and closing of the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetHeader"
        description="Element that composes the header of the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the content to be displayed inside the header.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetTitle"
        description="Element that represents the title of the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes text or content used as the title of the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetDescription"
        description="Provides a description for the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes text or content used as a description for the sheet.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetFooter"
        description="Element that composes the footer area of the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes buttons or other content to be included in the footer area.',
          },
        ]}
      />

      <ComponentPropsTable
        title="SheetClose"
        description="Element used to close the Sheet."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes content like a button that provides the functionality to close the sheet.',
          },
        ]}
      />
    </>
  )
}
