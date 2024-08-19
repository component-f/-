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
  // const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const
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
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <Sheet>
            <SheetTrigger>
              <Button onClick={toggleSheet}>Open</Button>
            </SheetTrigger>
            <SheetContent sheet={sheet} toggleSheet={toggleSheet}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here.
                  <br /> Click save when you're done.
                </SheetDescription>
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
          </Sheet>
          <pre>
            <code>{`
<Sheet>
  <SheetTrigger>
    <Button onClick={toggleSheet}>Open</Button>
  </SheetTrigger>
  <SheetContent sheet={sheet} toggleSheet={toggleSheet}>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
        <br /> Click save when you're done.
      </SheetDescription>
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
</Sheet>
          `}</code>
          </pre>
        </div>
      </div>
      {/* 방향에 따라 sheet 방향 다르게 열리게 하는 기능 나중으로 */}
      {/* <div className="flex flex-col gap-2">
        <label className="text-lg">Side</label>
        <div className="grid grid-cols-2 gap-2">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger>
                <Button onClick={toggleSheet}>{side}</Button>
              </SheetTrigger>
              <SheetContent sheet={sheet} toggleSheet={toggleSheet} side={side}>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here.
                    <br /> Click save when you're done.
                  </SheetDescription>
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
            </Sheet>
          ))}
        </div> 
      </div> */}
    </>
  )
}
