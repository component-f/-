'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Skeleton from '@/components/ui/skeleton'

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
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm ">
      <header className="flex flex-col space-y-1.5 p-6">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">Recent Activity</h1>
        <p className="text-sm text-muted-foreground">Review what happened over the past days.</p>
      </header>
      <ul className="p-6 pt-0">
        {data.map((item) => (
          <li key={item.id} className="flex items-center w-full h-16 border-b">
            {item.img ? (
              <>
                <img src={item.img || 'placeholder_image_url'} className="rounded-lg w-10 h-10 object-cover" />
                <div className="pl-4">
                  <span className="font-semibold text-sm">{item.name}</span>
                  <p className="text-sm">{item.comment}</p>
                </div>
                <span className="text-sm ml-auto">{item.time}</span>
              </>
            ) : (
              <>
                <Skeleton className="rounded-lg w-10 h-10" />
                <div className="pl-4 grid gap-1">
                  <Skeleton className="rounded-md h-4 w-16" />
                  <Skeleton className="rounded-md h-4 w-80" />
                </div>
                <div className="ml-auto">
                  <Skeleton className="rounded-md h-4 w-14" />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
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
