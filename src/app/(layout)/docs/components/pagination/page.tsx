import React from 'react'
import { ComponentPropsTable } from '@/components/common/component'
import {
  PaginationDefaultExample,
  PaginationIconExample,
  PaginationVariantExample,
} from '@/components/ui/pagination/paginationExample'

export default function PaginationPage() {
  return (
    <>
      <PaginationDefaultExample />
      <PaginationVariantExample />
      <PaginationIconExample />
      <ComponentPropsTable
        props={[
          {
            prop: 'totalPages',
            type: 'number',
            default: '',
            description: 'Specifies the total number of pages.',
          },
          {
            prop: 'showingPages',
            type: 'number',
            default: '',
            description: 'Determines the number of page numbers to display at once.',
          },
          {
            prop: 'currentPageStyle',
            type: 'string',
            default: 'border border-border rounded-lg',
            description: 'Defines the style for the currently selected page.',
          },
          {
            prop: 'startIcon',
            type: 'React.ReactNode',
            default: '<ChevronsLeft size={20} />',
            description: 'Specifies the icon used for the button that moves to the first page.',
          },
          {
            prop: 'prevIcon',
            type: 'React.ReactNode',
            default: '<ChevronLeft size={20} /> Previous',
            description: 'Specifies the icon used for the button that moves to the previous page.',
          },
          {
            prop: 'nextIcon',
            type: 'React.ReactNode',
            default: 'Next <ChevronRight size={20} />',
            description: 'Specifies the icon used for the button that moves to the next page.',
          },
          {
            prop: 'lastIcon',
            type: 'React.ReactNode',
            default: '<ChevronsRight size={20} />',
            description: 'Specifies the icon used for the button that moves to the last page.',
          },
        ]}
      />
    </>
  )
}
