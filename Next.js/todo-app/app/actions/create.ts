"use server"

import { revalidatePath } from "next/cache";
import { createTodo } from "../lab/todo";
import { redirect } from "next/navigation";

export type CreateNewTodo = {
    title: string;
    error: string;
}


export async function createTodoAction(prevState: CreateNewTodo,formData:FormData): Promise<CreateNewTodo>{

    //form-ka data-da kaso qaado
    const title = formData.get('title') as string;

    if(!title || title.trim().length === 0){
        return {
            title: '',
            error: 'Title is required'
        }
        
    }

    const priority = formData.get('priority') as 'low' | 'medium' | 'high';

    if(!priority){
        return {
            title: '',
            error: 'Priority is required'
        }
    }

    //create-garee haduu form jirin
    const todoId = await createTodo({title : title.trim(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), priority});

    if(!todoId){
        return {
            title: '',
            error: 'Failed to create todo'
        }
    }

    revalidatePath('/');
    redirect('/')
}