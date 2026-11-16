"use server";

import { revalidatePath } from "next/cache";
import {
    completeManyTodos,
    incompleteManyTodos
} from "../lab/todo";

export async function bulkCompleteTodosAction(ids: string[]) {
    if (!ids || ids.length === 0) return false;

    const success = await completeManyTodos(ids);

    if (success) {
        revalidatePath('/');
    }

    return success;
}

export async function bulkIncompleteTodosAction(ids: string[]) {
    if (!ids || ids.length === 0) return false;

    const success = await incompleteManyTodos(ids);

    if (success) {
        revalidatePath('/');
    }

    return success;
}

//Bu action'lar MongoDB fonksiyonlarını çağırıyor ve işlem başarılıysa cache'i yeniliyor.