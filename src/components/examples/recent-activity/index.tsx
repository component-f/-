'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Divider from '@/components/ui/divider'

type TData = {
  id: number
  img: string | null
  name: string
  comment: string
  time: string
}

export default function RecentActivity() {
  const [data, setData] = useState<TData[]>([
    {
      id: 0,
      img: null,
      name: 'BEARSUM',
      comment: `If you have nothing more to say, we'll wrap it up here.`,
      time: '',
    },
    {
      id: 1,
      img: null,
      name: 'inji0212',
      comment: `Awesome! I'm so glad there's a bus that goes straight home.`,
      time: '',
    },
    {
      id: 2,
      img: null,
      name: 'lsm0323',
      comment: `Seoul is far and challenging to reach, but it's an amazing city. I want to visit again.`,
      time: '',
    },
    {
      id: 3,
      img: null,
      name: 'cyweyo',
      comment: 'My Skeleton component is the best in the world.',
      time: '',
    },
    {
      id: 4,
      img: null,
      name: 'seonggil121',
      comment: 'It was a tough mentoring session today, but it was rewarding.',
      time: '',
    },
  ])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: process.env.NEXT_PUBLIC_ACCESS_KEY,
          count: 5,
        },
      })

      const updatedData = data.map((item, index) => ({
        ...item,
        img: response.data[index].urls.small,
        time: generateRandomTime(), // 클라이언트 사이드에서만 시간 생성
      }))

      setData(updatedData)
    } catch (error) {
      console.error('Error Fetching Data', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Review what happened over the past days.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ul>
          {data.map((item, index) => (
            <>
              <li key={item.id} className="flex items-center w-full py-2 flex-col sm:flex-row">
                {item.img ? (
                  <>
                    <img
                      src={item.img}
                      className="rounded-lg object-cover w-28 h-28 sm:w-10 sm:h-10 sm:mr-4 mr-auto flex-shrink-0"
                    />
                    <div className="flex flex-col mr-auto ml-0 sm:mt-0 mt-2">
                      <span className="font-semibold text-sm">{item.name}</span>
                      <p className="text-sm pr-4">{item.comment}</p>
                    </div>
                    <span className="text-xs sm:text-sm ml-auto sm:ml-auto mt-2 sm:mt-0 whitespace-normal">
                      {item.time}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="mr-auto sm:mr-0">
                      <Skeleton className="rounded-lg w-28 h-28  sm:w-10 sm:h-10 flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1 mr-auto sm:pl-4 ml-0 mt-2 sm:mt-0">
                      <Skeleton className="rounded-sm h-4 w-16" />
                      <Skeleton className="rounded-sm h-4 w-60" />
                    </div>
                    <div className="ml-auto sm:ml-auto mt-2 sm:mt-0">
                      <Skeleton className="rounded-sm h-4 w-10" />
                    </div>
                  </>
                )}
              </li>
              {data.length - 1 === index || <Divider />}
            </>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// 랜덤 시간 생성 함수
function generateRandomTime() {
  const start = new Date(2023, 0, 1) // 랜덤 시간 시작일
  const end = new Date() // 오늘까지
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }

  return randomDate.toLocaleDateString('en-US', options)
}
