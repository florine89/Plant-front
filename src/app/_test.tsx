// const baseUrl = 'https://trefle.io/api/v1/plants/search?token=';

// export async function getNewResultsFromApi(value : string) {
//     const res = await fetch(`${baseUrl}${process.env.TOKEN}&q=${value}&limit=1`); // , { cache: "no-cache" }, next: { revalidate: 1 }
//     const dataFetch = await res.json();

//     const data = dataFetch.data;
    
//     console.log('res', {data});
    
//     return data;

// }