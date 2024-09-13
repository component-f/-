import React from 'react'
import { ComponentPropsTable } from '@/components/common/component'
import {
  TextareaDefaultExample,
  TextareaVariantExample,
  TextareaCounterExample,
  TextareaDisabledExample,
} from '@/components/ui/textarea/textareaExample'

export default function TextareaPage() {
  return (
    <>
      <TextareaDefaultExample />
      <TextareaVariantExample />
      <TextareaCounterExample />
      <TextareaDisabledExample />

      <ComponentPropsTable
        title="Textarea"
        description="A textarea component used for capturing user input."
        props={[
          {
            prop: 'className',
            type: 'string',
            default: '',
            description: 'Adds custom Tailwind CSS classes for styling the textarea.',
          },
          {
            prop: 'ref',
            type: 'React.RefObject<HTMLTextAreaElement>',
            default: '',
            description: 'Used to pass a reference to the textarea.',
          },
          {
            prop: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the textarea, hiding the cursor.',
          },
          {
            prop: 'placeholder',
            type: 'string',
            default: '',
            description: 'Provides a hint to the user about what to input.',
          },
          {
            prop: 'value',
            type: 'string | number | readonly string[]',
            default: '',
            description: 'Sets the current value of the textarea.',
          },
          {
            prop: 'maxLength',
            type: 'number',
            default: 'undefined',
            description: 'Limits the maximum number of characters allowed in the textarea.',
          },
          {
            prop: 'counterClassName',
            type: 'string',
            default: 'text-gray-500',
            description: 'Adds a CSS class for customizing the character counter.',
          },
        ]}
      />
    </>
  )
}
