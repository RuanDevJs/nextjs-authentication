import type { Metadata } from "next";
import { fontPoppins } from "@/styles/fonts";

import "./globals.css";
import Protected from "./components/Protected";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "NextJs Authentication",
  description: "Website created to study OAuth Authentication.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionAuth = await getServerSession();

  return (
    <html lang="pt-BR">
      <body className={`${fontPoppins.className} antialiased`}>
        <Protected session={sessionAuth}>
          {children}
        </Protected>
      </body>
    </html>
  );
}
