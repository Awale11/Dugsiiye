"use server"

import { revalidatePath } from "next/cache";
import { fetchTodoById, updateTodo } from "../lab/todo";
import { redirect } from "next/navigation";




export async function updateTodoAction(formData:FormData){

    
        //labadan aya la update gareenaya
        const id = formData.get('id') as string;
        const title = formData.get('title') as string;

        if(!id || !title || title.trim().length === 0){
            console.log('Title is required' )
            return            
        }

        //id iyo title haduu jiro todo-ga jada jira xogtiisa ayan so aqrinaynaa
        const existingTodo = await fetchTodoById(id);

        if(!existingTodo){
            console.log('Todo not found')
            return 
        }

        //haduusan update garee
        const success = await updateTodo(id, {title : title.trim()});

        if(!success){
            console.log('Failed to update todo')
            return 
        }

        revalidatePath('/')
        redirect('/')

   
}
