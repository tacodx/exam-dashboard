import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import './globals.css'

const mono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AP2 Prüfungsvorbereitung',
  description: 'Digitale Vernetzung — Danja & Kacper',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className={`${mono.className} bg-[#0f0f0f] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
