import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import Header from '@/component/Header'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({children,

}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* <h1>Root Layout</h1> */}
        {/* <p>header</p> */}
        <Header/>
        {children}</body>
        {/* <p>footer</p> */}
    </html>
  )
} 