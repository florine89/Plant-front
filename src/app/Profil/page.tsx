"use client";

// import ChangeInputValue from "../components/ChangeInput";

async function Plant() {
      

      // Appel API externe trefle
      const headersList = {
        "Accept": "*/*",
      }
     
      const response = await fetch("https://trefle.io/api/v1/plants/search?token=vnrixh9S9eLoI82jjRKpjR5GB14W31ySQcOrsMD1JGg&q=coconut", { 
       method: "GET",
       headers: headersList
      });
     
      const result = await response.json();
      const plantList = result.data;
      // console.log(data.data);


   
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

          {plantList.map((elem : any) => (
          <div key={elem.id}>{elem.slug}</div>
        ))}

          {/* <ul className="absolute top-9 bg-white rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={option.slug + '-' + index}>
                <button className="text-left text-sm w-full hover:bg-zinc-700
               hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.slug}
                </button>
              </li>
            ))}
          </ul> */}

        </div>
      </section>

    </main>
    </div>
  )
}

export default Plant