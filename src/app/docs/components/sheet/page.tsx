'use client'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function SheetPage() {
  const [sheet, setSheet] = useState(false)
  const toggleSheet = () => {
    setSheet(!sheet)
  }

  return (
    <>
      <div className="mt-8 text-3xl font-bold">Sheet</div>
      <p className="mt-2 text-lg text-gray200">
        화면의 주요 콘텐츠를 보완하는 콘텐츠를 표시하기 위해 Dialog 구성 요소를 확장합니다.
      </p>
      <Sheet>
        <SheetTrigger>
          <Button onClick={toggleSheet}>Open</Button>
        </SheetTrigger>
        {sheet && (
          <SheetContent sheet={sheet} toggleSheet={toggleSheet}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <Input id="name" type="text" placeholder="type your name." className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                  Username
                </label>
                <Input id="username" type="text" placeholder="type your username" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose>
                <Button variant="contained" onClick={toggleSheet}>
                  Save changes
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        )}
        {/* </div> */}
      </Sheet>
    </>
  )
}
