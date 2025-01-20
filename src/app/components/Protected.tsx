"use client"

import { ReactNode } from "react"
import { Session } from "next-auth"
import { SessionProvider, SessionProviderProps } from "next-auth/react"

interface IProps {
  children: ReactNode;
  session: Session | null;
}

export default function Provider({ session, children }: SessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
