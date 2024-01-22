import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My notes system',
  description: 'Yes silly boy, I did this xD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
        </main>
        <p className="credits">
          Done by aikooo7, <a href="https://github.com/aikooo7">github.</a>
        </p>
      </body>
    </html>
  );
}
