'use client'

import { Github } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Loading from "./components/Loading";

export default function Home() {
  const { data, status } = useSession();
  const dataIsValid = data && data.user?.name;

  async function handleSignIn() {
    try {
      await signIn("google");
    } catch (error) {
      console.error('Could not signIn', error);
    }
  }

  useEffect(() => {
    if (status === 'authenticated') return redirect('/authenticated');
  }, [status]);

  if (status === 'loading') return <Loading />;
  if (status === 'authenticated' || dataIsValid) return redirect('/authenticated');

  return (
    <div className="grid grid-cols-[2fr_1fr]">
      <aside
        id="form-authentication-background"
        className="h-dvh"
      />
      <form className="p-8">
        <h1 className="font-medium text-2xl text-zinc-800 mb-5">
          Nice to see you again 😄
        </h1>
        <div className="mb-3">
          <label htmlFor="login" className="block font-normal text-zinc-700 text-xs px-3 py-2.5">
            Login
          </label>
          <input
            type="text"
            id="login"
            placeholder="Email or phone number"
            className="w-full py-3 px-5 outline-none bg-zinc-100 rounded-md font-normal text-sm text-black border borde-zinc-200"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-normal text-zinc-700 text-xs px-3 py-2.5">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full py-3 px-5 outline-none bg-zinc-100 rounded-md font-normal text-sm text-black border borde-zinc-200"
          />
        </div>
        <button className="w-full py-2.5 px-5 block mt-5 bg-[#007AFF] rounded-md text-white font-medium text-base hover:bg-[#3285dd] transition ease-in-out duration-150">Sign In</button>

        <div className="pt-5 mt-10 border-t border-t-zinc-200">
          <button
            className="w-full py-2.5 px-5 mt-5 bg-[#333333] rounded-md text-white font-medium text-base flex justify-center items-center gap-2"
            onClick={handleSignIn}
            type="button"
          >
            <Github size={20} /> Or Sign in with Github
          </button>
        </div>
      </form>
    </div>
  );
}
