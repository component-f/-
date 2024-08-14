import Button from '@/components/ui/button'
import { Delete, Send, Bell, ShoppingCart, Heart } from 'lucide-react'

export default function Buttonpage() {
  return (
    <>
      <div className="mt-8 text-3xl font-bold">Button</div>
      <p className="mt-2 text-lg text-gray200">
        Buttons allow users to take actions, and make choices, with a single tap.
      </p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <div className="flex gap-2">
            <Button />
            <Button variant="text"> Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button disabled>Disabled</Button>
          </div>
          <pre>
            <code>{`<Button />
<Button variant="text"> Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button disabled>Disabled</Button>`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Button with Icons</label>
          <div className="flex gap-2">
            <Button variant="outlined" startIcon={<Delete />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<Send size={16} />}>
              Send
            </Button>
          </div>
          <pre>
            <code>{`import { Delete, Send } from 'lucide-react'
<Button variant="outlined" startIcon={<Delete />}>
  Delete
</Button>
<Button variant="contained" endIcon={<Send size={16} />}>
  Send
</Button>`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Icons</label>
          <div className="flex gap-2">
            <Button>
              <Bell />
            </Button>
            <Button variant="contained">
              <ShoppingCart />
            </Button>
            <Button variant="outlined">
              <Heart size={24} />
            </Button>
          </div>
          <pre>
            <code>{`import { Bell, ShoppingCart, Heart } from 'lucide-react'
<Button>
  <Bell />
</Button>
<Button variant="contained">
  <ShoppingCart />
</Button>
<Button variant="outlined">
  <Heart size={24} />
</Button>`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Color</label>
          <div className="flex gap-2">
            <Button className="text-red-500">
              <Bell />
            </Button>
            <Button variant="contained" className="bg-red-500">
              Error
            </Button>
            <Button variant="outlined" className="text-red-500 border-red-500" startIcon={<Delete />}>
              Delete
            </Button>
          </div>
          <pre>
            <code>{`import { Bell, Delete } from 'lucide-react'
<Button className="text-red-500">
  <Bell />
</Button>
<Button variant="contained" className="bg-red-500">
  Error
</Button>
<Button variant="outlined" className="text-red-500 border-red-500" startIcon={<Delete />}>
  Delete
</Button>`}</code>
          </pre>
        </div>
      </div>
    </>
  )
}
