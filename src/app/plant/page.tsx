const getPlantData = async () => {
  const res = await fetch('https://trefle.io/api/v1/plants/search?token=65H3PqWVGKqVqLO4l2RXtTDpfGNdwiDH1VmD5SJLR-o&q=coconut')
  return res.json();
}

export default async function Plant() {

  const dataFetch = await getPlantData();
  const plantList = dataFetch.data;
     
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
        <form >
          <input
            placeholder="quelle plante cherches tu?"
            name="inputValue"
            type="text"
            className=" px-2 py-1 rounded-l-md border-2 border-white" />
        
          <button className="rounder-r-md border-2 border-zink-100
           hover:border-zink-500 hover:text-zinc-500 text-zink-100
           px-2 py-2 cursor-pointer">
            Search
          </button>
          </form>

          {plantList.map((post : any) => {
            return <h3 key={post.id}>{post.slug}</h3>
        }
        )}

        </div>
      </section>

    </main>
    </div>
  )
}
