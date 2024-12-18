/**
 * route path
 */

export const PATH = Object.freeze({
  /**
   * main
   */
  main: '/' as const,

  /**
   * 문서 페이지
   */
  docs: '/docs' as const,
  installation: '/docs/installation' as const,

  /**
   * 컴포넌트 페이지
   */
  input: '/docs/components/input' as const,
  label: '/docs/components/label' as const,
  alert: '/docs/components/alert' as const,
  radio: '/docs/components/radio' as const,
  avatar: '/docs/components/avatar' as const,
  textarea: '/docs/components/textarea' as const,
  skeleton: '/docs/components/skeleton' as const,
  button: '/docs/components/button' as const,
  switch: '/docs/components/switch' as const,
  pagination: '/docs/components/pagination' as const,
  sheet: '/docs/components/sheet' as const,
  breadcrumb: '/docs/components/breadcrumb' as const,
  accordion: '/docs/components/accordion' as const,
  dropdown: '/docs/components/dropdown' as const,
  table: '/docs/components/table' as const,
  select: '/docs/components/select' as const,
  modal: '/docs/components/modal' as const,
  toast: '/docs/components/toast' as const,
  checkbox: '/docs/components/checkbox' as const,

  /**
   * 사용 예시 페이지
   */
  examples: '/examples' as const,
})

export type PathValue = ValueOf<typeof PATH>
