export const metadata = {
  title: 'SOL-TRADER - High-Speed Trading Game',
  description: 'Fast-paced cryptocurrency trading simulation game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
