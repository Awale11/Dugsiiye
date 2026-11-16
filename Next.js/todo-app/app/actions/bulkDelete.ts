"use server";

import { revalidatePath } from "next/cache";
import { deleteManyTodos } from "../lab/todo";

export async function bulkDeletedTodoAction(ids:string[]){
    if(!ids || ids.length === 0) {
        return false;
    }

    const succes = await deleteManyTodos(ids);

    if(succes) {
        revalidatePath('/')
    }

   return succes;
}