import { Diamond } from 'lucide-react'
import { PATH } from '@/constants/path'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CopyToClipboard from '@/components/common/copyToClipboard'

export default function DocsPage() {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight mt-8">Introduction to Component Factory</h2>
      <p className="leading-relaxed mt-2">
        Unlock the power of beautifully crafted, reusable components with Component Factory. Fully customizable and
        accessible, these components are designed to seamlessly integrate into your projects. And the best part? It's
        available as an npm package, making it simple to install and use right away.
      </p>

      <h2 className="text-2xl font-semibold tracking-tight mt-6">What makes Component Factory different?</h2>
      <p className="leading-relaxed mt-2">
        Component Factory isn’t just a collection of examples to copy and paste. It's a full-fledged, installable
        component library available on npm, meaning you can easily add it to your project with a simple install command
      </p>

      <h2 className="text-2xl font-semibold tracking-tight mt-6">Why choose Component Factory?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
        <li className="flex items-center">
          <span className="mr-2 text-gray200">
            <Diamond size={12} />
          </span>
          <span>Ready-to-use components: No need to reinvent the wheel. Simply install and start building.</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-gray200">
            <Diamond size={12} />
          </span>
          <span>Highly customizable: Tailor each component to fit your design system and project needs.</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-gray200">
            <Diamond size={12} />
          </span>
          <span>
            Accessible: All components are built with best practices to ensure a great experience for all users.
          </span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-gray200">
            <Diamond size={12} />
          </span>
          <span>Easy to integrate: Install with npm, import the components you need, and start coding.</span>
        </li>
      </ul>

      <p className="leading-relaxed mt-2">
        Component Factory empowers you to create your own unique applications without sacrificing flexibility or ease of
        use. Whether you’re building a prototype or scaling a production app, Component Factory provides the foundation
        you need—so you can focus on what matters most.
      </p>

      <h2 className="text-2xl font-semibold tracking-tight mt-6">Get started today</h2>
      <p className="mt-2">Install Component Factory via npm and start building:</p>
      <CopyToClipboard code={'npm install @component-factory/theme'} />

      <p className="leading-relaxed mt-2">
        Component Factory is here to streamline your development process, offering components that are yours to
        customize, expand, and own.
      </p>

      <h2 className="text-2xl font-semibold tracking-tight mt-6">Next Steps</h2>
      <p className="leading-relaxed mt-2">
        Ready to dive deeper? Check out the full documentation to learn more about how to get the most out of Component
        Factory, including customization options, advanced usage, and tips for building your own component library.
      </p>

      <Button variant="contained" className=" mt-4">
        <Link href={PATH.installation}>Go to install</Link>
      </Button>
    </>
  )
}
