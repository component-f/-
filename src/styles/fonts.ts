import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/pretendard-thin.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard-semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
})

export default pretendard
