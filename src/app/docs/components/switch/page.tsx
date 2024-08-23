import Switch from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
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
            <code>{`<Switch />`}</code>
          </pre>
          <label className="text-lg">label</label>
          <div className="flex items-center ">
            <Switch id="darkmode" />
            <Label htmlFor="darkmode" className="cursor-pointer ml-2">
              darkmode
            </Label>
          </div>
          <pre>
            <code>{`<div className="flex items-center ">
            <Switch id="darkmode" />
            <Label htmlFor="darkmode" className="cursor-pointer ml-2">
              darkmode
            </Label>
          </div>`}</code>
          </pre>
          <label className="text-lg">Color& Checked & disable</label>
          <div className="flex items-center ">
            <Switch id="checked" checked={true} className=" bg-blue-500" />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              color
            </Label>
          </div>
          <div className="flex items-center ">
            <Switch id="checked" checked={true} />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              checked
            </Label>
          </div>
          <div className="flex items-center ">
            <Switch id="disabled" checked={false} disabled />
            <Label htmlFor="disabled" className="cursor-pointer ml-2 opacity-50">
              disabled
            </Label>
          </div>
          <pre>
            <code>{` <div className="flex items-center ">
            <Switch id="checked" checked={true} className=" bg-blue-500" />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              color
            </Label>
          </div>
          <div className="flex items-center ">
            <Switch id="checked" checked={true} />
            <Label htmlFor="checked" className="cursor-pointer ml-2 ">
              checked
            </Label>
          </div>
          <div className="flex items-center ">
            <Switch id="disabled" checked={false} disabled />
            <Label htmlFor="disabled" className="cursor-pointer ml-2 opacity-50">
              disabled
            </Label>
          </div>`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
