import Image from "next/image"

type ResultItemProps = {
  id: string
  common_name: string
  image_url: string
}

/**
 * For each result, the component shows the same data. With TS we are typing the data and receiving the destructured data in the component from the parent
 * With Image, we add in the next.config the possibilty to fetch all the domains
 */
export function ResultItem({id, common_name, image_url} : ResultItemProps){
  return (

  <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg m-2">
    <Image className="h-80" src={image_url} width={200} height={100} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{common_name}</div>
      {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit atque unde, asperiores mollitia dignissimos consectetur. Doloribus deleniti nostrum ipsa!
      </p> */}
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  </div>

  )
}