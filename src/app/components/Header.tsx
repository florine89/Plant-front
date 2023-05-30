'use client';

import Image from 'next/image';

import { useRouter} from 'next/navigation';

import logo from "../../../public/Maplante.png";

export default function Header(){
    //ici mon hook useRouter de nextsjs ( il faut absolument être dans un client component)
    //je l'utilise sur mon onclick de mon image
    
  const router = useRouter();

  return(
        <div className="flex justify-center pt-20 "
        onClick={() => router.push('/')}>
          <Image
            className=" mt-7 cursor-pointer transform transition duration-500 hover:scale-75"
            src={logo}
            width={275}
            alt="picture logo"
          />
        </div> 
  )
}