import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'
import Link from 'next/link'
import GitHub from '/public/images/github-icon.svg'
import CopyToClipboard from '@/components/common/copyToClipboard'

export default function InstallationPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mt-8">How to Install Component Factory</h1>

      <h2 className="text-xl font-semibold mt-6">Install via npm</h2>
      <p className="text-gray-700 mt-2">
        Once published, you can install the package by running the following command:
      </p>
      <CopyToClipboard code={'npm install @component-factory/theme'} />

      <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50 w-auto max-w-[700px] mt-6">
        <p className="text-yellow-700 flex items-center">
          <Clock size={18} className="mr-2" />
          The package has not been published yet. Stay tuned for the release!
        </p>
      </div>

      <div className="grid mt-6 w-full max-w-[440px] grid-cols-1 gap-2 sm:grid-cols-2">
        <Button
          variant="contained"
          className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] "
          endIcon={<GitHub height={16} alt="GitHub" />}
        >
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/component-f/component-factory"
            className="whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Subscribe for Updates
          </Link>
        </Button>
        <Button variant="outlined" className="whitespace-nowrap overflow-hidden  max-w-[160px] ">
          <Link href="/docs/components/accordion" className="whitespace-nowrap overflow-hidden text-ellipsis">
            View Components
          </Link>
        </Button>
      </div>
    </>
  )
}
