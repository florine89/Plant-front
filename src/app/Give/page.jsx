import { PlantItem } from "@/components/PlantItem";

/**
 * This function gets all avaiable Plants of our database
 * @returns the data from the Plant table from Prisma
 */
function getAllPlants() { 
  return prisma.plant.findMany();
}

/**
 * 
 * @returns For each item in the DB, returns an instance the component by passing the props to the child
 */
async function Page(){
  
  const allPlants = await getAllPlants()
  console.log('allPlants', allPlants)
  return(
    <>
    <ul className="pl-4">
      {allPlants.map(cat => (
        <PlantItem key={cat.id} {...cat}/>))}
    </ul>

    </>
  )
}


export default Page;