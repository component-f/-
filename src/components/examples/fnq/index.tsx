'use client'
import { Accordion, AccordionDetails, AccordionItem, AccordionSummary } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Divider from '@/components/ui/divider'

export default function FnQ() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>FnQ</CardTitle>
        </CardHeader>

        <CardContent>
          <Divider />
          <Accordion className="w-full border-none shadow-none">
            <AccordionItem value="item-1">
              <AccordionSummary className="p-0 py-4 pr-4">
                Why copy/paste and not packaged as a dependency?
              </AccordionSummary>
              <AccordionDetails>
                The idea behind this is to give you ownership and control over the code, allowing you to decide how the
                components are built and styled.
                <br />
                <br /> Start with some sensible defaults, then customize the components to your needs.
                <br />
                <br /> One of the drawbacks of packaging the components in an npm package is that the style is coupled
                with the implementation. The design of your components should be separate from their implementation.
              </AccordionDetails>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionSummary className="p-0 py-4 pr-4">
                Do you plan to publish it as an npm package?
              </AccordionSummary>
              <AccordionDetails>No. I have no plans to publish it as an npm package.</AccordionDetails>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionSummary className="p-0 py-4 pr-4">Which frameworks are supported?</AccordionSummary>
              <AccordionDetails>
                You can use any framework that supports React. Next.js, Astro, Remix, Gatsby etc.
              </AccordionDetails>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionSummary className="p-0 py-4 pr-4">Can I use this in my project?</AccordionSummary>
              <AccordionDetails>
                Yes. Free to use for personal and commercial projects. No attribution required.
                <br />
                <br /> But hey, let me know if you do. I'd love to see what you build.
              </AccordionDetails>
            </AccordionItem>
          </Accordion>
          <Divider />
        </CardContent>
      </Card>
    </>
  )
}
