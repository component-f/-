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
   * 사용 예시 페이지
   */
  examples: '/examples' as const,
});

export type PathValue = ValueOf<typeof PATH>
