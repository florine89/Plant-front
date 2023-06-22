'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import logo from "../../../public/Maplante.png"
import { useRouter } from 'next/navigation'

import { signIn, signOut, useSession } from 'next-auth/react';

export function Nav() {

    //mes usestate pour gerer la barre de nav
    const [nav, setNav] = useState(false);
    //usestae pour gerer mon scroll et le shadow de ma nav barre
    const [Shadow, SetShadow] = useState(false);

    //je déclare mon hook pour gérer ma route dans mon onclick du logo
    const router = useRouter();

    //fonction appelé dans mon onclick du logo de ma navbar et redirige vers l'accueil
    const handleClick = () => {
        setNav(false),
            router.push('/')
    }

    // je gère ma nav barre en version mobile avec cette fonction
    const handleNav = () => {
        setNav(!nav)
        console.log(setNav)
    }

    //j'affiche l'ombre de ma navbar au premier rendu de la page avec le scroll
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                SetShadow(true)
            } else {
                SetShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);

    }, [])

    const { data: session } = useSession();

    if (session) {

        return (
            <div
                className={Shadow ? 'fixed display-block w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
                <nav className="flex w-full flex-wrap items-center justify-between uppercase text-opacity-100
        bg-green-50 text-neutral-500 hover:text-neutral-700
         focus:text-neutral-700 dark:bg-neutral-600 p-2
        ">

                    <Link href='/plant' className='transform transition duration-500 hover:scale-110 sm:hidden'>Les plantes</Link>
                    <Link href='/Give' className='transform transition duration-500 hover:scale-110 sm:hidden'>Donner</Link>
                    <Link href='/Find' className='transform transition duration-500 hover:scale-110 sm:hidden'>Rechercher</Link>
                    <Link href='/Around' className='transform transition duration-500 hover:scale-110 sm:hidden'>Autour de moi</Link>
                    <Link href='/Profil' className='transform transition duration-500 hover:scale-110 sm:hidden'>Profil</Link>

                    <div onClick={handleNav} className='mt-3 cursor-pointer lg:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>

                    <div className='flex flex-col w-48 pr-4 text-sm sm:text-xs'>
                        {/* <a href='/Register' className='border-1 m-1 border-emerald-700 hover:bg-dark-green
 transform transition duration-500 hover:scale-110
 rounded-md p-1 flex justify-center shadow-lg'>Sinscrire</a> */}

                        <button
                            className='border-1 border-emerald-700  hover:bg-dark-green
 transform transition duration-500 hover:scale-110 uppercase m-5
 rounded-md p-1  shadow-lg'
                            onClick={() => signOut()}
                        >
                            Se déconnecter
                        </button>
                        <h2 className="lowercase">Bonjour  {session?.user?.email}</h2>

                    </div>
                </nav>

                {/* Création de ma navbar under 750px avec mon menu burger */}
                <div
                    className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

                    <div
                        className={nav ? 'lg:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-700'
                            : 'fixed left-[-100%] top-0 ease-in duration-500'
                        }
                    >

                        <section className='flex justify-end '>
                            <div className=' w-11 flex justify-end items-end'>
                                <div onClick={handleNav} className=' flex justify-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer w-full'>
                                    <AiOutlineClose />
                                </div>
                            </div>
                        </section>


                        <div className='py-4 flex flex-col' >
                            <ul className='uppercase'>
                                <Link href='/' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm text-neutral-500 transform transition duration-500 hover:scale-110'>Accueil</li>
                                </Link>
                                <Link href='/plant' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Les plantes</li>
                                </Link>
                                <Link href='/Give' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Donner</li>
                                </Link>
                                <Link href='/Find' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Rechercher</li>
                                </Link>
                                <Link href='/Around' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Autour de moi</li>
                                </Link>
                                <Link href='/Profil' scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Profil</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='flex justify-center'
                            onClick={handleClick}>
                            <Image
                                className=" mt-7 cursor-pointer transform transition duration-500 hover:scale-75"
                                src={logo}
                                width={200}
                                alt="picture logo"
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return (
        <div
            className={Shadow ? 'fixed display-block w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <nav className="flex w-full flex-wrap items-center justify-between uppercase text-opacity-100
                    bg-green-50 text-neutral-500 hover:text-neutral-700
                     focus:text-neutral-700 dark:bg-neutral-600 p-2
                    ">

                <Link href='/plant' className='transform transition duration-500 hover:scale-110 sm:hidden'>Les plantes</Link>
                <Link href='/Give' className='transform transition duration-500 hover:scale-110 sm:hidden'>Donner</Link>
                <Link href='/Find' className='transform transition duration-500 hover:scale-110 sm:hidden'>Rechercher</Link>
                <Link href='/Around' className='transform transition duration-500 hover:scale-110 sm:hidden'>Autour de moi</Link>
                <Link href='/Profil' className='transform transition duration-500 hover:scale-110 sm:hidden'>Profil</Link>

                <div onClick={handleNav} className='mt-3 cursor-pointer lg:hidden'>
                    <AiOutlineMenu size={25} />
                </div>

                <div className='flex flex-col w-48 pr-4 text-sm sm:text-xs'>
                    <a href='/Register' className='border-1 m-1 border-emerald-700 hover:bg-dark-green
             transform transition duration-500 hover:scale-110
             rounded-md p-1 flex justify-center shadow-lg'>Sinscrire</a>

                    <button
                        className='border-1 m-1 border-emerald-700  hover:bg-dark-green
             transform transition duration-500 hover:scale-110 uppercase
             rounded-md p-1 shadow-lg'
                        onClick={() => signIn()}
                    >
                        Se connecter
                    </button>


                </div>
            </nav>

            {/* Création de ma navbar under 750px avec mon menu burger */}
            <div
                className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

                <div
                    className={nav ? 'lg:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-700'
                        : 'fixed left-[-100%] top-0 ease-in duration-500'
                    }
                >

                    <section className='flex justify-end '>
                        <div className=' w-11 flex justify-end items-end'>
                            <div onClick={handleNav} className=' flex justify-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer w-full'>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </section>


                    <div className='py-4 flex flex-col' >
                        <ul className='uppercase'>
                            <Link href='/' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm text-neutral-500 transform transition duration-500 hover:scale-110'>Accueil</li>
                            </Link>
                            <Link href='/plant' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Les plantes</li>
                            </Link>
                            <Link href='/Give' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Donner</li>
                            </Link>
                            <Link href='/Find' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Rechercher</li>
                            </Link>
                            <Link href='/Around' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Autour de moi</li>
                            </Link>
                            <Link href='/Profil' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm  text-neutral-500 transform transition duration-500 hover:scale-110'>Profil</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='flex justify-center'
                        onClick={handleClick}>
                        <Image
                            className=" mt-7 cursor-pointer transform transition duration-500 hover:scale-75"
                            src={logo}
                            width={200}
                            alt="picture logo"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}