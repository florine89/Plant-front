'use client';

import { createPlantAction } from "@/app/_actions"

const NewPlant = () => {
    
    async function action (data: FormData){
        const name = data.get("name");
        const description = data.get("description");
        // console.log(description)
        const quantity = Number(data.get("quantity"));

        

        // console.log(typeof quantity)
        const user_id = 1;
        console.log('new plant send')
        if ((!name || typeof name !== 'string') || (!description || typeof description !== 'string') || (!quantity || typeof quantity !== 'number')) return
        await createPlantAction(name, description, quantity, user_id)
    }

    return(
        <form action={action} className="flex flex-col m-5">
            <h2>Add a plant</h2>
            <input
                type="text"
                name="name"
                placeholder="Nom de la plante"
                className="border rounded border-slate-400 px-2 py-0.5 m-2"
            />
            <input
                type="text"
                name="description"
                placeholder="Description de la plante"
                className="border rounded border-slate-400 px-2 py-0.5 m-2"
            />
            <input
                type="text"
                name="quantity"
                placeholder="Quantité"
                className="border rounded border-slate-400 px-2 py-0.5 m-2"
            />
            <input
                type="text"
                name="consition_name"
                placeholder="Etat de la plante"
                className="border rounded border-slate-400 px-2 py-0.5 m-2"
            />
            <button
                type="submit"
                className="border rounded border-slate-700 pl-2 m-2 bg-slate-500 text-slate-300 uppercase"
            >
                Ajoute ta plante !
            </button>

        </form>

    )
}

export default NewPlant;