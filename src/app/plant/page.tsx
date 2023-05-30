// const getPlantData = async (value : string) => {
//   const res = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.TOKEN}&q=${value}&limit=1`)
//   return res.json();
// }

import InputChange from "../components/Plant/InputChange";

async function Plant() {

  // CLIENT SIDE --> Error with CORS

  // const [showResults, setShowResults ] = useState();

  // let displayData;

  // async function getData() {

  //   const token = '';

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

        <InputChange />

        </div>

      </section>

    </main>
    </div>

  )
}


export default Plant;