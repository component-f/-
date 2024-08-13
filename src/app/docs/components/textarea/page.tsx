import Textarea from '@/components/ui/textarea'

export default function TextareaPage() {
  return (
    <div className="text-sm">
      <div className="mt-8 text-3xl font-bold">Textarea</div>
      <p className="mt-2 text-lg text-gray200">텍스트 영역이나 텍스트 영역처럼 보이는 구성 요소를 표시합니다.</p>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col gap-2">
          <label className="text-lg">Default</label>
          <Textarea placeholder="type your message here." />
          <pre>
            <code>{`<Textarea placeholder="type your message here." />`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">With Label</label>
          {/* Label컴포넌트 완성되면 컴포넌트로 변경 예정 */}
          <label htmlFor="message">Your message</label>
          <Textarea placeholder="type your message here." />
          <pre>
            <code>{`<Textarea className="border-sky-500 placeholder-sky-500 text-sky-500" placeholder="type your message here." />`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Disabled</label>
          <Textarea placeholder="type your message here." disabled />
          <pre>
            <code>{`<Textarea placeholder="type your message here." disabled />`}</code>
          </pre>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">With Button</label>
          <Textarea placeholder="type your message here." />
          {/* button 교체 예정 */}
          <button className="border border-border p-2 w-[500px] rounded-lg bg-foreground text-background">
            Send message
          </button>
          <pre>
            <code>{`<Textarea placeholder="type your message here." />
<button className="border border-border p-2 w-[500px] rounded-lg bg-foreground text-background">Send message</button>`}</code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg">Form</label>
        <Textarea placeholder="type your message here." />
        <button className="border border-border p-2 w-[100px] rounded-lg bg-foreground text-background">Submit</button>
        <pre>
          <code>{`<Textarea placeholder="type your message here." />`}</code>
        </pre>
      </div>
    </div>
  )
}
