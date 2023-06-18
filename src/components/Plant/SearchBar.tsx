import { revalidateTag } from 'next/cache';

function SearchBar({ getResult } : any) {  

    async function changeInputValue(data: FormData){
        "use server";
          
        // get input value
        let inputval = data.get("inputValue")?.valueOf() as string;
        console.log('input val', inputval);
      
        getResult(inputval);
        revalidateTag('posts');
      
        // return { value: inputval }
      }
      
    return (
        <form action={changeInputValue}>
        <input
        placeholder='test'
        name="inputValue"
        defaultValue={"coconut"}
        type="text"
        className=" px-2 py-1 rounded-l-md border-2 border-white"/>

        <button className="rounder-r-md border-2 border-zink-100
          hover:border-zink-500 hover:text-zinc-500 text-zink-100
          px-2 py-2 cursor-pointer">
           Search
         </button>
      </form> 

    )
}

export default SearchBar;