import SearchPlant from "../components/searchPlant";

const getPlantData = async () => {
  const res = await fetch('https://trefle.io/api/v1/plants/search?token=65H3PqWVGKqVqLO4l2RXtTDpfGNdwiDH1VmD5SJLR-o&q=coconut')
  return res.json();
}

export default async function Plant() {

  const dataFetch = await getPlantData();
  const plantList = dataFetch.data;
  console.log(plantList)
     
  return (
    <h1>hello world</h1>

    // <SearchPlant plantList={plantList} />

  )
}
