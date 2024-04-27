export const metadata = {
  title: 'shubhp',
  description: 'Portolio Shubh Patel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
