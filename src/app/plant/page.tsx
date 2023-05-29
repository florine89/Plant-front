// const getPlantData = async (value : string) => {
//   const res = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.TOKEN}&q=${value}&limit=1`)
//   return res.json();
// }

async function Plant({data}) {

  // CLIENT SIDE --> Error with CORS

  // const [showResults, setShowResults ] = useState();

  // let displayData;

  // async function getData() {

  //   const token = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..8xZmDRv8-BOw8cbv.JhvL2J7vp7qCtOm4iSLyPCIIOwALWlUzpWyw5PlJCiKZ-ek4GTsm-jx7KRwjjEOckiX7HfxyHSFZvO_1Iq7J9xZkgJOQJ2T9LNJaUGRm6PI-guFzJMZoQBCIGEHhsJ2-lZayVPTTAaLuxZ7RK8mpYGXrPfF0Hcrkl3VYstVhGFLVOjsai1vovvYa_g.eYxr9v4XXmj6OaVKc_0yvQ';

  //   const value = "coconut";

  //   const res = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.NEXT_PUBLIC_TOKEN}&q=${value}&limit=1`,{
  //     method: 'GET',
  //     headers: {
  //      'Authorization': `Bearer ${token}`,
  //     }
  //   });
  //   const responseData = await res.json();
  //   console.log(responseData);

  //   displayData = responseData.map(function(plant : any) {
  //     return (
  //       <p key={plant.id}>{plant.slug}</p>
  //     )
  //   })
  //   console.log(responseData);
  //   setShowResults(displayData);
  // }

  // useEffect(() => {
  //   getData();

  // }, [])

  // SERVER SIDE --> the page can't refresh with the result
  // "use server";


  // async function changeInputValue(data: FormData){
  //   "use server";

  //   const value = data.get("inputValue") as string;
  //   console.log('input val', value);

  //   Plant(value);

  // }

  // const dataFetch = await getPlantData(input);

  // // console.log('datafetch', dataFetch)

  // let plantList = dataFetch.data;
  // console.log('result', plantList)

  async function changeInputValue(data: FormData){
    "use server";

    const value = data.get("inputValue") as string;
    console.log('input val', value);

    getServerSideProps();
  }

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

        <form action={changeInputValue}>
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
        </form>



        </div>
        <span>Resultat</span>

        {/* {data.length === 0
            ? <h2>No results</h2>
            :
        <ul>
          {data.map((plant : any) =>
          <li key={plant.id}>{plant.slug}</li>
          )}
        </ul>
        } */}

      </section>

    </main>
    </div>

  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const value = 'coconut';
  const res = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.TOKEN}&q=${value}&limit=1`)
  const dataFetch = await res.json();
  const data = dataFetch.data;

  console.log('data in getServerSide', data)

  // Pass data to the page via props
  return { props: { data } };
}

export default Plant;