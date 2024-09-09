import { Button } from '@/components/ui/button'
import NotFoundText from '/public/images/404.svg'
import NotFoundImage from '/public/images/not-found.svg'
import Link from 'next/link'

/**
 * @todo no-layout 폴더로 이동
 */
export default function NotFound() {
  return (
    <div className="flex h-screen">
      <div className="h-full flex justify-center items-end bg-[#AEF2FF] ">
        <NotFoundImage className="w-full h-auto" alt="not-found-image" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <NotFoundText className="text-foreground mb-7" alt="404" />
          <span className="text-5xl mb-2">OOOps!</span>
          <span className="text-5xl">Page Not Found</span>
        </div>
        <div className="text-lg text-center mt-9 mb-8 text-muted-foreground">
          <p>This page doesn’t exist or was removed!</p>
          <p>We suggest you back to home</p>
        </div>
        <Button variant="contained" className="rounded-none px-4">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
