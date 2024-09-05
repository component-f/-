'use client'

import Button from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import Textarea from '@/components/ui/textarea'

export default function ReportForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>What area are you having problems with?</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label>Area</Label>
            <Select
              options={[
                { label: 'Team', value: 'Team' },
                { label: 'Billing', value: 'Billing' },
                { label: 'Account', value: 'Account' },
                { label: 'Deployments', value: 'Deployments' },
                { label: 'Support', value: 'Support' },
              ]}
              onSelect={(value) => {
                value
              }}
              defaultSelected="Team"
            />
          </div>
          <div className="grid gap-2">
            <Label>Security Level</Label>
            <Select
              options={[
                { label: 'Severity 1 (Highest)', value: 'Severity 1' },
                { label: 'Severity 2', value: 'Severity 2' },
                { label: 'Severity 3', value: 'Severity 3' },
                { label: 'Severity 4', value: 'Severity 4' },
                { label: 'Severity 5 (Lowest)', value: 'Severity 5' },
              ]}
              onSelect={(value) => {
                value
              }}
              defaultSelected="Severity 2"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input placeholder="I need help with..." id="subject" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea placeholder="Please include all information relevant to your issue." id="description" />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button>Cancel</Button>
        <Button variant="contained">Submit</Button>
      </CardFooter>
    </Card>
  )
}
