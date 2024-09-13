import React from 'react'
import { ComponentPropsTable } from '@/components/common/component'
import {
  BreadcrumbDefaultExample,
  BreadcrumbDropdownExample,
  BreadcrumbSeparatorExample,
} from '@/components/ui/breadcrumb/breadcrumbExample'

export default function BreadcrumbPage() {
  return (
    <>
      <BreadcrumbDefaultExample />
      <BreadcrumbSeparatorExample />
      <BreadcrumbDropdownExample />

      <ComponentPropsTable
        title="Breadcrumb"
        description="The properties of the Breadcrumb component used for page navigation."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Passes the content that includes each item of the Breadcrumb.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbList"
        description="An element that composes a list within the Breadcrumb."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes multiple items in a list format within the Breadcrumb.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbLink"
        description="An element that provides a link for a Breadcrumb item."
        props={[
          {
            prop: 'href',
            type: 'string',
            default: '',
            description: 'Specifies the URL to navigate to when clicked.',
          },
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the link text or content.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbSeparator"
        description="An element that separates the items in the Breadcrumb."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '<ChevronRight size={20} className="text-gray-500" />',
            description: 'Can include a separator symbol or text.',
          },
        ]}
      />

      <ComponentPropsTable
        title="BreadcrumbText"
        description="A text element that indicates the current position within the Breadcrumb."
        props={[
          {
            prop: 'children',
            type: 'React.ReactNode',
            default: '',
            description: 'Includes the text that describes the current position.',
          },
        ]}
      />
    </>
  )
}
