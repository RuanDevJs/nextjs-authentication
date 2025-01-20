import TravelgramSvg from "@/assets/Logo.svg"
import { ImageIcon, MapPin, Plane, SearchIcon } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";

export default function Header() {
  const { data } = useSession();
  const overlayRef = useRef<OverlayPanel>(null);

  function handleToggleOverlay(event: React.SyntheticEvent) {
    if (overlayRef && overlayRef.current) {
      overlayRef.current.toggle(event)
    }
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <header className='bg-[#F5F5F5] p-8'>
      <nav className="flex items-center justify-between">
        <div className="block p-2">
          <Image src={TravelgramSvg} alt="TravelgramSvg" />
        </div>
        <ul className="flex items-center justify-between gap-3">
          <li className="hover:text-[#EF5F4C] cursor-pointer text-zinc-700">
            <SearchIcon />
          </li>
          <li>
            <a href="#" className="block p-2 font-normal text-zinc-700 hover:text-[#EF5F4C] transition ease-in-out duration-150">Explorar</a>
          </li>
          <li>
            <a href="#" className="block p-2 font-normal text-zinc-700 hover:text-[#EF5F4C] transition ease-in-out duration-150">Minhas Viagens</a>
          </li>
          <li>
            <a href="#" className="block p-2 font-normal text-zinc-700 hover:text-[#EF5F4C] transition ease-in-out duration-150">Explorar</a>
          </li>
          <li className="block">
            <img src={data?.user?.image} width={50} height={50} alt="" className="rounded-full object-cover border-2 border-transparent hover:border-[#EF5F4C] transition ease-in-out duration-150 cursor-pointer" onClick={handleToggleOverlay} />
            <OverlayPanel ref={overlayRef} className="bg-white p-2.5 rounded w-[220px] " >
              <button
                className="block py-2 px-5 bg-red-500 w-full rounded text-white font-medium text-sm hover:bg-red-600 duration-150 ease-in-out transition"
                onClick={handleSignOut}
              >
                Sair
              </button>
            </OverlayPanel>
          </li>
        </ul>
      </nav>
      <div className="mt-5 flex flex-col items-center">
        <div className="flex flex-col items-center text-center justify-center gap-5 w-[60%]">
          <img src={data?.user?.image} width={220} height={220} alt="" className="rounded-full" />
          <div className="mt-2">
            <h1 className="font-bold text-3xl text-zinc-700">{data?.user.name}</h1>
            <p className="font-normal text-base text-zinc-500 mt-3">
              {data?.user.bio}
            </p>
          </div>
        </div>
        <div className="mt-5 mr-5">
          <ul className="flex justify-center gap-5">
            <li className="flex items-center gap-1 mb-2.5">
              <MapPin size={25} color="#EF5F4C" />
              <p className="text-lg text-zinc-500 font-normal">Minas Gerais, Brasil</p>
            </li>
            <li className="flex items-center gap-1 mb-2.5">
              <Plane size={25} color="#EF5F4C" />
              <p className="text-lg text-zinc-500 font-normal">20 Países</p>
            </li>
            <li className="flex items-center gap-1 mb-2.5">
              <ImageIcon size={25} color="#EF5F4C" />
              <p className="text-lg text-zinc-500 font-normal">240 fotos</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
