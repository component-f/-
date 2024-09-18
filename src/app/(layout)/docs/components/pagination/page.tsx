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
            prop: 'showingPages',
            type: 'number',
            default: '',
            description: 'Determines the number of page numbers to display at once.',
          },
          {
            prop: 'totalPages',
            type: 'number',
            default: '',
            description: 'Specifies the total number of pages.',
          },
          {
            prop: 'currentPageStyle',
            type: 'string',
            default: 'border border-border rounded-lg',
            description: 'Defines the style for the currently selected page.',
          },
          {
            prop: 'icon',
            type: 'React.ReactNode',
            default:
              '[<ChevronsLeft size={20} />, <ChevronLeft size={20} />, <ChevronRight size={20} />, <ChevronsRight size={20} />]',
            description:
              'An array of icons used for the pagination buttons in the following order: first, previous, next, and last.',
          },
        ]}
      />
    </>
  )
}
