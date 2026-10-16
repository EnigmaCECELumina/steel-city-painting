import '../styles/globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Steel City Painting & Handyman',
  description: 'Owner-operated painting and handyman services in Hamilton, Ontario. Interior painting, exterior painting, home repairs, free estimates, and a 3-year workmanship warranty.'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
