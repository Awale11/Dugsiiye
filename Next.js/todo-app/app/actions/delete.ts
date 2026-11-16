"use server"

import { revalidatePath } from "next/cache";
import { deleteTodo } from "../lab/todo";

export async function deleteTodoAction(id: string){

    if(!id){
        console.log('Todo ID is required')
        return 
    }

    const success = await deleteTodo(id);

    if(!success){
        console.log('Failed to delete todo')
        return 
    }
    revalidatePath('/')
}