import Switch from '@/components/ui/switch'
export default function Switchpage() {
  return (
    <>
      <div className="mt-8 text-3xl font-bold">Switch</div>
      <p className="mt-2 text-lg text-gray200">Switches toggle the state of a single setting on or off.</p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <Switch />
          <pre>
            <code>{`<Avatar src="/images/logo.svg" alt="logo" />`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
