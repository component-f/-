'use client'

import * as React from 'react'
import { Check, Plus, Send } from 'lucide-react'

import { cn } from '@/utils/cn'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal'

const users = [
  {
    name: 'Olivia Martin',
    email: 'm@example.com',
    avatar: '/images/avatar01.png',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    avatar: '/images/avatar03.png',
  },
  {
    name: 'Emma Wilson',
    email: 'emma@example.com',
    avatar: '/images/avatar05.png',
  },
  {
    name: 'Jackson Lee',
    email: 'lee@example.com',
    avatar: '/images/avatar02.png',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    avatar: '/images/avatar04.png',
  },
] as const

type User = (typeof users)[number]

export default function Chat() {
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([])
  const [messages, setMessages] = React.useState([
    {
      role: 'agent',
      content: 'Hi, how can I help you today?',
    },
    {
      role: 'user',
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: 'agent',
      content: 'What seems to be the problem?',
    },
    {
      role: 'user',
      content: "I can't log in.",
    },
  ])

  const [input, setInput] = React.useState('')
  const inputLength = input.trim().length

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar src="/images/avatar04.png" alt="profile-image" />
          <div className="ml-2">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-sm text-muted-foreground">m@example.com</p>
          </div>
        </div>
        <Modal>
          <ModalTrigger>
            <Button variant="outlined" className="rounded-full h-10 w-10 p-0">
              <Plus className="h-4 w-4" />
              <span className="sr-only">New message</span>
            </Button>
          </ModalTrigger>
          <ModalContent className="gap-0 p-0 outline-none">
            <ModalHeader className="px-4 pb-4 pt-5">
              <ModalTitle>New message</ModalTitle>
              <ModalDescription>Invite a user to this thread. This will create a new group message.</ModalDescription>
            </ModalHeader>
            <div className="p-2">
              {users.map((user) => (
                <div
                  key={user.email}
                  className="relative cursor-default select-none rounded-sm py-1.5 text-sm outline-none flex items-center px-2 hover:bg-muted"
                  onClick={() => {
                    if (selectedUsers.includes(user)) {
                      return setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user))
                    }

                    return setSelectedUsers([...users].filter((u) => [...selectedUsers, user].includes(u)))
                  }}
                >
                  <Avatar src={user.avatar} alt="Image" />
                  <div className="ml-2">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  {selectedUsers.includes(user) ? <Check className="ml-auto flex h-5 w-5 text-primary" /> : null}
                </div>
              ))}
            </div>
            <ModalFooter className="flex items-center border-t p-4 sm:justify-between">
              <ModalClose>
                <Button variant="contained" disabled={selectedUsers.length < 2}>
                  Continue
                </Button>
              </ModalClose>
              {selectedUsers.length > 0 ? (
                <div className="flex -space-x-2 overflow-hidden">
                  {selectedUsers.map((user) => (
                    <Avatar src={user.avatar} className="inline-block border-2 border-background" />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Select users to add to this thread.</p>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
                message.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted',
              )}
            >
              {message.content}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (inputLength === 0) return
            setMessages([
              ...messages,
              {
                role: 'user',
                content: input,
              },
            ])
            setInput('')
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button type="submit" variant="contained" className="h-10 w-10 p-0" disabled={inputLength === 0}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
