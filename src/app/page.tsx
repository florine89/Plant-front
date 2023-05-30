import Image from "next/image"
import plante from "../../public/plantemain.jpg"
import { error } from "console"


export default function Home() {
  return (
   
    <>
    <div id="#accueil" className="flex flex-col justify-center items-center sm:text-sm">
  <h1 className=" text-2xl mb-5 text-neutral-500 ">Bienvenue sur Maplante ! </h1>
  <p className=" mb-5 w-4/5 lg:text-lg text-neutral-500">Ici, nous vous invitons à revenir à l essentiel, à renouer avec la nature. 
    Que vous cherchiez des plantes pour embellir votre jardin, votre balcon ou votre intérieur, ou que vous souhaitiez donner une seconde vie à vos plantes bien-aimées, vous êtes au bon endroit. 
    Explorez notre collection variée et découvrez une multitude de choix pour donner vie à votre espace.</p>
    <p className="lg:text-lg  text-neutral-500 mb-3 sm:w-4/5">Alors, rejoignez-nous et partageons ensemble la beauté et la tranquillité que la nature nous offre.</p>
  </div>
  <div>
<Image 
src={plante}
alt="plante main page"
/>
    </div>
  </>
  )
}
