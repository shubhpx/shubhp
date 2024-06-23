export const metadata = {
  title: 'shubhp',
  description: 'Portolio Shubh Patel',
}

import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <p style={{ display: 'flex', gap: '10px', justifyContent: 'center', padding: '10px' }}>
          <Link href="/">shubhp</Link>
          <Link href="/projects">projects</Link>
          <Link href="/about">about</Link>
        </p>
        {children}
      </body>
    </html>
  )
}
