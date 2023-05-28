async function ChangeInputValue(data: FormData) {
  
    const inputValue = data.get("inputValue")?.valueOf();
    if (typeof inputValue !== "string" || inputValue.length === 0) {
      throw new Error ("Invalid inputValue")
    }
    console.log(inputValue)
  
  }

  export default ChangeInputValue;