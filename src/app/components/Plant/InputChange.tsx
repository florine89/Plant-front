import Result from "./Result";

export default function InputChange({data}:any) {

    async function changeInputValue(data: FormData){
    "use server";

    const value = data.get("inputValue") as string;
    console.log('input val', value);

    getServerSideProps(value);

  }

    return(
    <>
        <form action={changeInputValue}>
          <input
          placeholder='test'
          name="inputValue"
          type="text"
          className=" px-2 py-1 rounded-l-md border-2 border-white"/>

          <button className="rounder-r-md border-2 border-zink-100
            hover:border-zink-500 hover:text-zinc-500 text-zink-100
            px-2 py-2 cursor-pointer">
             Search
           </button>
        </form> 

            {!data
            ? <h2>No results</h2>
            : <Result data={data}/>}  
        
    </>
    )

}

    // This gets called on every request
export async function getServerSideProps(value:any) {
  // Fetch data from external API

  // const value = 'coconut';
  const res = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.TOKEN}&q=${value}&limit=1`)
  const dataFetch = await res.json();
  const data = dataFetch.data;

  console.log('data in getServerSide', data)

  // Pass data to the page via props
  return { 
    props: { 
    data
  },
 };
}
