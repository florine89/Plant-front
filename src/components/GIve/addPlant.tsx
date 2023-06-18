'use client'

import { createPlantAction } from "@/app/_actions"

const NewPlant = () => {
    async function action (data: FormData){
        const name = data.get("name");
        const description = data.get("description");
        const quantity = 1;
        const user_id = 1;
        console.log('new plant send')
        if ((!name || typeof name !== 'string') || (!description || typeof description !== 'string') || (!quantity || typeof quantity !== 'number')) return
        await createPlantAction(name, description, quantity, user_id)
    }

    return(
        <form action={action}>
            <h2>Add a plant</h2>
            <input
                type="text"
                name="name"
                className="rounded border-slate-400 px-2 py-0.5"
            />
            <input
                type="text"
                name="description"
                className="rounded border-slate-400 px-2 py-0.5"
            />
            <input
                type="text"
                name="quantity"
                className="rounded border-slate-400 px-2 py-0.5"
            />
            <button
                type="submit"
                className="rounded border-slate-700 pl-2"
            >
                send
            </button>

        </form>

    )
}

export default NewPlant;