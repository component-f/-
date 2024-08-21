'use client'
import React from 'react'
import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from '@/components/ui/accordion'
import { Triangle } from 'lucide-react'

export default function Accordianpage() {
  return (
    <>
      <div className="mt-8 text-3xl font-bold">Accordion</div>
      <p className="mt-2 text-lg text-gray200">accordion</p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <div className="mt-10">
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionSummary>Accordion 1</AccordionSummary>
                <AccordionDetails>Content for Accordion 1</AccordionDetails>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionSummary>Accordion 2</AccordionSummary>
                <AccordionDetails>Content for Accordion 2</AccordionDetails>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionSummary>Accordion 3</AccordionSummary>
                <AccordionDetails>Content for Accordion 3</AccordionDetails>
              </AccordionItem>
            </Accordion>
          </div>
          <pre>
            <code>{`
<Accordion>
  <AccordionItem value="item-1">
    <AccordionSummary>Accordion 1</AccordionSummary>
    <AccordionDetails>Content for Accordion 1</AccordionDetails>
  </AccordionItem>
    <AccordionItem value="item-2">
    <AccordionSummary>Accordion 2</AccordionSummary>
    <AccordionDetails>Content for Accordion 2</AccordionDetails>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionSummary>Accordion 3</AccordionSummary>
    <AccordionDetails>Content for Accordion 3</AccordionDetails>
  </AccordionItem>
</Accordion>`}</code>
          </pre>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">ExpandIcons</label>
          <div className="mt-10">
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionSummary>Accordion 1</AccordionSummary>
                <AccordionDetails>Content for Accordion 1</AccordionDetails>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionSummary expandIcon={<Triangle className="text-red-500 " />}>Error</AccordionSummary>
                <AccordionDetails>Content for Error</AccordionDetails>
              </AccordionItem>
            </Accordion>
          </div>
          <pre>
            <code>{`
<Accordion>
  <AccordionItem value="item-1">
    <AccordionSummary>Accordion 1</AccordionSummary>
    <AccordionDetails>Content for Accordion 1</AccordionDetails>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionSummary expandIcon={<Triangle className="text-red-500" />}>
      Error
    </AccordionSummary>
    <AccordionDetails>Content for Error</AccordionDetails>
  </AccordionItem>
</Accordion>`}</code>
          </pre>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">SingleOpen</label>
          <div className="mt-10">
            <Accordion singleOpen>
              <AccordionItem value="item-1">
                <AccordionSummary expandIcon={<Triangle className="text-red-500 " />}>Accordion 1</AccordionSummary>
                <AccordionDetails>Content for Accordion 1</AccordionDetails>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionSummary>Accordion 2</AccordionSummary>
                <AccordionDetails>Content for Accordion 2</AccordionDetails>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionSummary expandIcon={<Triangle className="text-green-500" />}>Accordion 3</AccordionSummary>
                <AccordionDetails>Content for Accordion 3</AccordionDetails>
              </AccordionItem>
            </Accordion>
          </div>
          <pre>
            <code>{`
<Accordion singleOpen>
              <AccordionItem value="item-1">
                <AccordionSummary expandIcon={<Triangle className="text-red-500 " />}>Accordion 1</AccordionSummary>
                <AccordionDetails>Content for Accordion 1</AccordionDetails>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionSummary>Accordion 2</AccordionSummary>
                <AccordionDetails>Content for Accordion 2</AccordionDetails>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionSummary expandIcon={<Triangle className="text-green-500" />}>Accordion 3</AccordionSummary>
                <AccordionDetails>Content for Accordion 3</AccordionDetails>
              </AccordionItem>
            </Accordion>`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
