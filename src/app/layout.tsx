import './globals.css';
import { Inter } from 'next/font/google';
<<<<<<< HEAD
import { Nav } from './components/Nav';
=======
import { Nav } from '../components/Nav';
import Logo from '../components/logo';
>>>>>>> 1450f2814bad354e281ecbeb8cecfee14711514c
import { Providers } from './providers';
import  Header  from './components/Header';


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
       <Header/>
        <div>{children}</div>
        
        </Providers>
        





      </body>
    </html>
  )
}
