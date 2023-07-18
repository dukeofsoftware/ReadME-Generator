import "@/styles/globals.css"

import type { Metadata } from "next"

import GeneratorNavbar from "@/components/GeneratorNavbar"
import GeneratorSidebar from "@/components/GeneratorSidebar"
import Providers from "@/components/Providers"
import { poppins } from "@/styles/fonts"

export const metadata: Metadata = {
  title: {
    default: "Readme Generator  ",
    template: "Readme Generator | %s ",
  },
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background min-h-screen min-w-screen ${poppins.className} text-secondary`}
      >
        <Providers>
          <GeneratorNavbar />
          <div className=" w-full flex relative">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
