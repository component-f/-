/**
 * route path
 */

export const PATH = Object.freeze({
  /**
   * main
   */
  root: '/' as const,

  /**
   * 문서 페이지
   */
  docs: '/docs' as const,

  /**
   * 컴포넌트 페이지
   */
  input: '/docs/components/input' as const,
  alert: '/docs/components/alert' as const,
  radio: '/docs/components/radio' as const,

  /**
   * 사용 예시 페이지
   */
  examples: '/examples' as const,
})

export type PathValue = ValueOf<typeof PATH>
