type PlantItemProps = {
  id: number
  name: string
  description: string 
  condition_name: string
  category_name: string
  quantity: number
}

/**
 * For each plant avaiable in the prisma DB, the following component is rendered. 
 * The TypeScript Props are passed to fix the right data from the parent to the child. 
 */
export function PlantItem({id, name, description, condition_name, category_name, quantity} : PlantItemProps){

  return (

  <div key={id} className="flex max-w-sm rounded overflow-hidden shadow-lg">
    {/* <Image className="w-full" src={image} alt="Sunset in the mountains"/> */}
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">
          {description}
      </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Etat: {condition_name}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Categorie: {category_name}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Qté: {quantity}</span>
  </div>
  </div>

  )
}