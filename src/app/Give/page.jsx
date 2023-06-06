import { PlantItem } from "@/components/PlantItem";

function getAllPlants() { 
  return prisma.plant.findMany();
}

async function Page(){
  
  const allPlants = await getAllPlants()
  
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