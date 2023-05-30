import './globals.css';
import { Inter } from 'next/font/google';
import { Nav } from './components/Nav';
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
