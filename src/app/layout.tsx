import type { Metadata } from "next";
import Provider from "./components/Protected";

import { PrimeReactProvider } from 'primereact/api';
import { fontPoppins } from "@/styles/fonts";

import "primereact/resources/primereact.min.css"
// import 'primereact/resources/themes/mdc-dark-indigo/theme.css'

import "./globals.css";

export const metadata: Metadata = {
  title: "NextJs Authentication",
  description: "Website created to study OAuth Authentication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <Provider>
      <html lang="pt-BR">
        <PrimeReactProvider>
          <body className={`${fontPoppins.className} antialiased`}>
            {children}
          </body>
        </PrimeReactProvider>
      </html>
    </Provider>

  );
}
