"use server";

import { searchTodos } from "../lab/todo";
import { searchTodoInput, Todo } from "../types/todo";

export async function searchTodosAction(input: searchTodoInput): Promise<Todo[]> {
    try {

        //Server Action, arama bilgilerini alıp daha önce yazdığımız MongoDB fonksiyonuna gönderiyor.
        const todos = await searchTodos(input);
        return todos;
    } catch (error) {
        console.error('Search action error:', error);
        return [];
    }
}