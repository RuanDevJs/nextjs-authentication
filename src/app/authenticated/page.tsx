'use client'

import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation';
import Loading from '../components/Loading';

export default function Auth() {
  const { data, status } = useSession();

  async function handleSignOut() {
    await signOut();
  }

  if (status === 'loading') return <Loading />;
  if (status === 'unauthenticated' || data === null) return redirect('/');

  return (
    <div className='h-full w-full flex items-center justify-center p-5'>
      <div className='text-center flex items-center flex-col gap-3 p-2'>
        <img src={data?.user?.image} alt="" className="rounded-full w-40 h-40" />
        <div className='mt-2'>
          <h1 className="font-medium text-2xl text-zinc-800 mb-3">
            Hello {data?.user?.name} 😄
          </h1>
          <button
            className="w-full py-2.5 px-5 bg-red-500 hover:bg-red-400 transition ease-in-out duration-150 rounded-md text-white font-medium text-base flex justify-center items-center gap-2"
            onClick={handleSignOut}
            type="button"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
