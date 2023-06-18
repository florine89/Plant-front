'use server';

import { createPlant } from "@/lib";
import { revalidatePath } from "next/cache";

export async function createPlantAction(name: string, description: string, quantity: number, user_id: number) {
    await createPlant(name, description, quantity, user_id)
    console.log("actions");
    revalidatePath("/give");
}