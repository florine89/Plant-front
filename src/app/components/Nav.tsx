import Link from 'next/link'

export function Nav(){
    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between uppercase text-opacity-100
        bg-green-200 text-neutral-500 shadow-lg hover:text-neutral-700
         focus:text-neutral-700 dark:bg-neutral-600 p-2">
         <Link href='/plant' className='transform transition duration-500 hover:scale-110 '>Les plantes</Link>
         <Link href='/Give' className='transform transition duration-500 hover:scale-110'>Donner</Link>
         <Link href='/Find' className='transform transition duration-500 hover:scale-110'>Rechercher</Link>
         <Link href='/Around' className='transform transition duration-500 hover:scale-110'>Autour de moi</Link>
         <Link href='/Profil' className='transform transition duration-500 hover:scale-110'>Profil</Link>

       <div className='flex flex-col pr-4 text-sm w-40'>
           <a href='/Register' className='border-1 m-1 border-emerald-700 hover:bg-green-400
 transform transition duration-500 hover:scale-110
 rounded-md p-1 flex justify-center shadow-lg'>Sinscrire</a>
 <a href='/Login' className='border-1 m-1 border-emerald-700  hover:bg-green-400
 transform transition duration-500 hover:scale-110
 rounded-md p-1 flex justify-center shadow-lg'>Se connecter</a>
</div>
       </nav>
    )
}