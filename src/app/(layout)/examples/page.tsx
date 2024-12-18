import Link from 'next/link'

import Demo from '@/components/examples/demo'
import { Button } from '@/components/ui/button'
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/common/page-header'

export default function ExamplesPage() {
  return (
    <div>
      <PageHeader>
        <PageHeaderHeading>Check out some examples</PageHeaderHeading>
        <PageHeaderDescription>
          Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your
          own.
        </PageHeaderDescription>
        <PageActions>
          <Button variant="contained" className="text-xs px-3">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button className="text-xs px-3">
            <Link href="/docs/components/accordion">Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <Demo />
    </div>
  )
}
