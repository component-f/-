import Avatar from '@/components/ui/avatar'

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
          <Avatar className="bg-[#f44336]">M</Avatar>
          <Avatar className="bg-[#673ab7]">OH</Avatar>
          <pre>
            <code>{`<Avatar className="bg-[#f44336]">M</Avatar>`}</code>
            <br />
            <code>{`<Avatar className="bg-[#673ab7]">OH</Avatar>`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Disabled</label>
          {/* <Input type="email" className="" placeholder="placeholder" disabled /> */}
          <pre>
            <code>{`<Input type="email" className="" placeholder="placeholder" disabled />`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
