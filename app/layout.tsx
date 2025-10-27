import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className='antialiased'>
        <Header />
        {children}
      </body>
    </html>
  )
}