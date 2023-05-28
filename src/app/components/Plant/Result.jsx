export default function Result({plantList}) {

    return (
        <ul>
        {plantList.map((plant) => 
          <li key={plant.id}>{plant.slug}</li>
        )}
        </ul>
    )
}