"use client"

export default function Result({data}:any) {
    console.log('result', data)
    return(
        <>

        <ul>
          {data.map((plant : any) =>
          <li key={plant.id}>{plant.slug}</li>
          )}
        </ul>
        </>
    )
}