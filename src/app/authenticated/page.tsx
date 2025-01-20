'use client'
import { useEffect, useRef } from 'react';

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

import Loading from '../components/Loading';
import Header from './components/Header';

import CardPicture from "@/assets/CardPictures/Card photo.jpg"
import CardPicture0 from "@/assets/CardPictures/Image-0.jpg"
import CardPicture1 from "@/assets/CardPictures/Image-1.jpg"
import CardPicture2 from "@/assets/CardPictures/Image-2.jpg"
import CardPicture3 from "@/assets/CardPictures/Image-3.jpg"
import CardPicture4 from "@/assets/CardPictures/Image-4.jpg"
import CardPicture5 from "@/assets/CardPictures/Image-5.jpg"
import CardPicture6 from "@/assets/CardPictures/Image-6.jpg"
import CardPicture7 from "@/assets/CardPictures/Image-7.jpg"
import CardPicture8 from "@/assets/CardPictures/Image-8.jpg"
import CardPicture9 from "@/assets/CardPictures/Image-9.jpg"
import CardPicture10 from "@/assets/CardPictures/Image.jpg"

import Image from 'next/image';

export default function Auth() {
  const { data, status } = useSession();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userIsAuthenticated = status === 'authenticated';

    function handleSetDataAnimate(element: HTMLImageElement, index: number) {
      element.draggable = false
      return index % 2 === 0 ? element.dataset.animate = 'top' : element.dataset.animate = 'bottom';
    }

    function handlleAnimateGallery(element: HTMLImageElement, index: number) {
      setTimeout(() => { element.classList.add('animate') }, 420 * index)
    }

    if (userIsAuthenticated && (gridRef && gridRef.current)) {
      const galleryImages = gridRef?.current?.querySelectorAll('img');

      galleryImages.forEach((element, index) => handleSetDataAnimate(element, index))
      galleryImages.forEach((element, index) => handlleAnimateGallery(element, index))
    }

  }, [status]);

  if (status === 'loading') return <Loading />;
  if (status !== 'authenticated' || data === null) return redirect('/');

  return (
    <main>
      <Header />
      <div className="grid grid-cols-4 gap-5 p-10" id="gridRef" ref={gridRef}>
        <Image src={CardPicture.src}
          width={CardPicture.width}
          height={CardPicture.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture0.src}
          width={CardPicture0.width}
          height={CardPicture0.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture1.src}
          width={CardPicture1.width}
          height={CardPicture1.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture2.src}
          width={CardPicture2.width}
          height={CardPicture2.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture3.src}
          width={CardPicture3.width}
          height={CardPicture3.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture4.src}
          width={CardPicture4.width}
          height={CardPicture4.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture5.src}
          width={CardPicture5.width}
          height={CardPicture5.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture6.src}
          width={CardPicture6.width}
          height={CardPicture6.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture7.src}
          width={CardPicture7.width}
          height={CardPicture7.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture8.src}
          width={CardPicture8.width}
          height={CardPicture8.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture9.src}
          width={CardPicture9.width}
          height={CardPicture9.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
        <Image src={CardPicture10.src}
          width={CardPicture10.width}
          height={CardPicture10.height}
          className='w-full h-full object-cover rounded'
          quality={80}
          alt=""
        />
      </div>
    </main>
  )
}
