import { Inter, Ballet, Oswald } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], 
                      display: 'swap',
                      variable: '--font-inter',
})

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oswald',
})

export const metadata = {
  title: 'Samantha',
  description: 'Samantha portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className='bg-black'>
        <nav className='p-4 flex justify-end space-x-6 bg-black'>
          <Link href='./about'>
            <h3 className='font-oswald'>Skills</h3>
          </Link>
          <Link href='./about'>
            <h3>Hobbies</h3>
          </Link>
          <Link href='./about'>
            <h3>Resume</h3>
          </Link>
          <Link href='./about'>
            <h3>Projects</h3>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}