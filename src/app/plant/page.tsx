"use client";

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";


// const getPlantData = async (value : string) => {
  //   const res = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.TOKEN}&q=${value}&limit=1`)
  //   const res = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TOKEN}&limit=1`)
  
  //   return res.json();
  
  // }
  
  export default async function Plant(value : string) {
    
      const {data: session} = useSession();
      console.log('session', session)

  const [showResults, setShowResults ] = useState();
  
  let displayData;

  async function getData() {

    const value = "coconut";

    const res = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.TOKEN}&q=${value}&limit=1`,{
      // headers: {
      //   Authorization: `Bearer 49bc8ac087f5a57b43dff2cd1a498b45501167407a9f9a9c6e1e001bfefdc964%7C9af26551daf5aa371fa3f968767451afd1320536ee54b3354264d5badc780751`,
      // },
    });
    const responseData = await res.json();
    console.log(responseData);

    displayData = responseData.map(function(plant : any) {
      return (
        <p key={plant.id}>{plant.slug}</p>
      )
    })
    console.log(responseData);
    setShowResults(displayData);
  }

  useEffect(() => {
    getData();
  }, [])
  // "use server";


  // async function changeInputValue(data: FormData){
  //   "use server";

  //   const input = data.get("inputValue") as string;
  //   console.log('input val', input);

  //   Plant(input);

  // }
  
  // const dataFetch = await getPlantData(input);
  
  // console.log('datafetch', dataFetch)
  
  // let plantList = dataFetch.data;
  
  // console.log('result', plantList)

  
     
  return (

    <div className="flex justify-center">
    <main className="flex justify-center items-center bg-gradient-to-br from-green-400 via-emerald-700
      to-yellow-300 h-[100vh] w-3/4 rounded-3xl">
      <section className=" w-full md:max-w-[500px] p-4 flex flex-col text-center
       items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px]
       bg-white bg-opacity-25 backdrop-blur-lg drop-shadow-lg shadow-2xl rounded text-gray-900">
        <h1 className="text-3xl ">Quelle plante veux-tu découvrir ?</h1>
        <p className="text-sm mt-2">
          Ci-dessous, écris le nom de la plante que tu aimerais rechercher
        </p>

        <div className="relative flex mt-10 md:mt-4">

        <form>
          <input
          placeholder='test'
          name="inputValue"
          type="text"
          defaultValue={"test"}
          className=" px-2 py-1 rounded-l-md border-2 border-white"/>
        
          <button className="rounder-r-md border-2 border-zink-100
            hover:border-zink-500 hover:text-zinc-500 text-zink-100
            px-2 py-2 cursor-pointer">
             Search
           </button>
        </form>



        </div>
        <span>Resultat</span>
    {/* {plantList.length ==! 0
      ? 
      <h2>J'ai des rep</h2>
    : <h2>No response</h2>
    } */}
        {/* <ul>
          {plantList.map((plant : any) => 
          <li key={plant.id}>{plant.slug}</li>
          )}
        </ul> */}

        {showResults}

 
      </section>

    </main>
    </div>

  )
}