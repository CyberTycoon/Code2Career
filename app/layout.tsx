import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Code2Career',
  description: 'Learn, Build, Grow. Launch Your Career.',
  keywords: 'coding, programming, career, development, learning, projects, portfolio',
  authors: [{ name: 'Code2Career', url: 'https://code2-career.vercel.app' }],
  openGraph: {
    title: 'Code2Career',
    description: 'Learn, Build, Grow. Launch Your Career.',
    url: 'https://code2-career.vercel.app',
    siteName: 'Code2Career',
    images: [
      {
        url: '/Code2Career.jpg',
        width: 1200,
        height: 630,
        alt: 'Code2Career',
      },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={_geistMono.className}>
      <body className={`${_geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
