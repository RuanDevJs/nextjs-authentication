import { FlameKindling } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <div className='h-dvh w-full flex items-center justify-center p-5'>
      <div className='text-center flex items-center flex-col gap-3 p-2'>
        <FlameKindling size={40} color='#bd2f2f' />
        <div className='mt-2'>
          <h2 className="font-medium text-2xl text-zinc-700 mb-3">
            Fetching data...
          </h2>
          <p className='text-zinc-500 font-normal text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore earum porro dicta facilis. Facere?
          </p>
        </div>
      </div>
    </div>
  )
}
