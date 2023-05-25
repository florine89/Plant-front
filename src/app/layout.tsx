import './globals.css'
import { Inter } from 'next/font/google'
import logo from "../../public/Maplante.png"
import Image from 'next/image'
import { Nav } from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ma plante',
  description: 'Donne ta plante',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>

        <Nav/>
        
        <div className="flex justify-center ">
          <Image
            className=" mt-7 cursor-pointer transform transition duration-500 hover:scale-75"
            src={logo}
            width={275}
            alt="picture logo"
          />
        </div>

        <div>{children}</div>


      </body>
    </html>
  )
}
