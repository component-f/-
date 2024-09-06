'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Select } from '@/components/ui/select'

export default function TeamMembers() {
  return (
    <Card>
      <CardHeader className="flex flex-col justify-between space-y-1.5 p-6">
        <CardTitle className="text-xl font-semibold leading-none tracking-tight">Team Members</CardTitle>
        <CardDescription>Invite your team members to collaborate.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar src="/images/avatar01.png" alt="profile-image" />
            <div className="ml-2">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">m@example.com</p>
            </div>
          </div>
          <Select
            options={[
              { label: 'Viewer', value: 'viewer', description: 'Can view and comment.' },
              { label: 'Developer', value: 'developer', description: 'Can view, comment and edit.' },
              { label: 'Billing', value: 'billing', description: 'Can view, comment and manage billing.' },
              { label: 'Owner', value: 'owner', description: 'Admin-level access to all resources.' },
              { label: 'Member', value: 'member', description: 'Team member' },
            ]}
            onSelect={(value) => {
              value
            }}
            defaultSelected="owner"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <Avatar src="/images/avatar02.png" alt="profile-image" />
            <div className="ml-2">
              <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
              <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
            </div>
          </div>
          <Select
            options={[
              { label: 'Viewer', value: 'viewer', description: 'Can view and comment.' },
              { label: 'Developer', value: 'developer', description: 'Can view, comment and edit.' },
              { label: 'Billing', value: 'billing', description: 'Can view, comment and manage billing.' },
              { label: 'Owner', value: 'owner', description: 'Admin-level access to all resources.' },
              { label: 'Member', value: 'member', description: 'Team member' },
            ]}
            onSelect={(value) => {
              value
            }}
            defaultSelected="member"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <Avatar src="/images/avatar03.png" alt="profile-image" />
            <div className="ml-2">
              <p className="text-sm font-medium leading-none">Emma Wilson</p>
              <p className="text-sm text-muted-foreground">emma@example.com</p>
            </div>
          </div>
          <Select
            options={[
              { label: 'Viewer', value: 'viewer', description: 'Can view and comment.' },
              { label: 'Developer', value: 'developer', description: 'Can view, comment and edit.' },
              { label: 'Billing', value: 'billing', description: 'Can view, comment and manage billing.' },
              { label: 'Owner', value: 'owner', description: 'Admin-level access to all resources.' },
              { label: 'Member', value: 'member', description: 'Team member' },
            ]}
            onSelect={(value) => {
              value
            }}
            defaultSelected="member"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <Avatar src="/images/avatar04.png" alt="profile-image" />
            <div className="ml-2">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">sofia@example.com</p>
            </div>
          </div>
          <Select
            options={[
              { label: 'Viewer', value: 'viewer', description: 'Can view and comment.' },
              { label: 'Developer', value: 'developer', description: 'Can view, comment and edit.' },
              { label: 'Billing', value: 'billing', description: 'Can view, comment and manage billing.' },
              { label: 'Owner', value: 'owner', description: 'Admin-level access to all resources.' },
              { label: 'Member', value: 'member', description: 'Team member' },
            ]}
            onSelect={(value) => {
              value
            }}
            defaultSelected="member"
          />
        </div>
      </CardContent>
    </Card>
  )
}
