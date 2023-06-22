import './globals.css';
import { Inter } from 'next/font/google';
import { Nav } from '../components/NavBar/Nav';
import Logo from '../components/logo';
import { Providers } from './providers';


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
        <Providers>

        <Nav/>
        <Logo/>
        <div>{children}</div>
        
        </Providers>

      </body>
    </html>
  )
}
