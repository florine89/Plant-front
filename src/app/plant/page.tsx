import SearchBar from "@/components/Plant/SearchBar";
import ResultList from "@/components/Plant/Result";
import { revalidatePath } from "next/cache";


const baseUrl = 'https://trefle.io/api/v1/plants/search?token=';
  
  /**
   * This async function calls the external API with the secure TOKEN using fetch from NextJS
   * @param value : is the input value from the user (currently coconut as value)
   * @returns the response of the external API in json 
   */
async function getResult(value: any) { 
    "use server"   
  
    // fetch api
    const res = await fetch(`${baseUrl}${process.env.TOKEN}&q=${value}&limit=1`);
    const dataFetch = await res.json();
    const data = dataFetch.data;
    console.log('res', {data});
    revalidatePath('/plant')
    
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

      
      <SearchBar getResult={getResult} />

      <ResultList data={data} />
    {/* <ul className="pl-4 flex">
      {data.map((res :any) => (
        <ResultItem key={res.id} {...res}/>))}
    </ul> */}

        </div>

      </section>

    </main>
    </div>

  )

}

export default getResult;