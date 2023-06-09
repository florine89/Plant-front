import NewPlant from "@/components/GIve/addPlant";
import { PlantItem } from "@/components/GIve/PlantItem";
import { prisma } from "@/lib";

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
  // console.log('allPlants', allPlants)
  
  
  return(
    <>

    <NewPlant/>
    
    <ul className="pl-4 flex flex-col items-center">
      <h2>La liste de plantes</h2>
      {allPlants.map(cat => (
        <PlantItem key={cat.id} {...cat}/>))}
    </ul>

    </>
  )
}


export default Page;