import { ResultItem } from "@/components/Plant/ResultItem";

const baseUrl = 'https://trefle.io/api/v1/plants/search?token=';

// async function changeInputValue(data: FormData){
//   "use server";
    
//   // get input value
//   const value = data.get("inputValue")?.valueOf() as string;
//   console.log('input val', value);

// }

/**
 * This async function calls the external API with the secure TOKEN using fetch from NextJS
 * @param value : is the input value from the user (currently coconut as value)
 * @returns the response of the external API in json 
 */
async function getResult(value:any) {    
// fetch api
  // console.log('getresult', value)
  const res = await fetch(`${baseUrl}${process.env.TOKEN}&q=${value}&limit=6`)
  return res.json();
}

/**
 * This is the refault function of our page
 * @returns the element of the page with the response of the API (element data)
 * The component ResultItem permits to handle each result the data are passed to the child
 */
async function Plant() {
  
    const value='coconut';

    const dataFetch = await getResult(value);
    const result = dataFetch.data;
    // console.log('data', result)
    
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

      
        {/* <form action={changeInputValue}>
          <input
          placeholder='test'
          name="inputValue"
          type="text"
          className=" px-2 py-1 rounded-l-md border-2 border-white"/>

          <button className="rounder-r-md border-2 border-zink-100
            hover:border-zink-500 hover:text-zinc-500 text-zink-100
            px-2 py-2 cursor-pointer">
             Search
           </button>
        </form>  */}

    <ul className="pl-4 flex">
      {result.map((res :any) => (
        <ResultItem key={res.id} {...res}/>))}
    </ul>

        </div>

      </section>

    </main>
    </div>

  )


}


export default Plant;