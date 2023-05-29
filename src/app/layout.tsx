import './globals.css';
import { Inter } from 'next/font/google';
import { Nav } from './components/Nav';
import Logo from './components/logo';


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
        <Logo/>
        



        <div>{children}</div>


      </body>
    </html>
  )
}
