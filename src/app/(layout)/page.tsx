import Usage from '@/components/common/usage'
import ThemeExamples from '@/components/themes/theme-examples'
import ThemeCustomizer from '@/components/themes/theme-customizer'

export default function HomePage() {
  return (
    <div className="w-full md:flex">
      <div className="mt-32 mb-6 px-20">
        <Usage />
        <ThemeCustomizer />
      </div>
      <div className="px-20 md:px-0">
        <ThemeExamples />
      </div>
    </div>
  )
}
