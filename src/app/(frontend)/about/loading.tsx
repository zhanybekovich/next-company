'use client'

import Loader from '@/components/Loader'

export default function Loading() {
  return (
    <div className="my-20 w-60 h-60 mx-auto flex items-center justify-center">
      <Loader />
    </div>
  )
}
