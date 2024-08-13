import Avatar from '@/components/ui/avatar'
import { FolderIcon } from 'lucide-react'

export default function Avatarpage() {
  return (
    <>
      <div className="mt-8 text-3xl font-bold">Avatar</div>
      <p className="mt-2 text-lg text-gray200">
        Avatars are found throughout material design with uses in everything from tables to dialog menus.
      </p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <Avatar src="/images/logo.svg" alt="logo" />
          <pre>
            <code>{`<Avatar src="/images/logo.svg" alt="logo" />`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Letter</label>
          <Avatar>A</Avatar>
          <Avatar className="bg-[#EF4444]">CF</Avatar>

          <pre>
            <code>{`<Avatar>A</Avatar>
<Avatar className="bg-[#EF4444]">CF</Avatar>
`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Icons</label>
          <Avatar className="bg-[#7F1D1D] ">
            <FolderIcon />
          </Avatar>
          <pre>
            <code>{`import { FolderIcon } from 'lucide-react'
<Avatar className="bg-[#7F1D1D] ">
<FolderIcon />
</Avatar>`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
