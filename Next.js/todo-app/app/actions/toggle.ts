"use server"

import { revalidatePath } from "next/cache";
import { fetchTodoById, updateTodo } from "../lab/todo"

export async function toggleTodoAction(id: string) {

    //here qofka click lasiiyay ayan so aqrinaynaa
    const todo = await fetchTodoById(id);

    if(!todo){
        console.log('Todo not found')
        return 
    }

    const success = await updateTodo(id, {completed : !todo.completed});

    if(!success){
        console.log('Failed to update todo')
        return 
    }
    //haduu success yhy we make cache yani home-ka update garee oo data-da cusub noo keeni si user-ka hore uu uga arko
    revalidatePath('/');
}