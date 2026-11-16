//todo-ga wuxu ka kooban yhy intan =id,title,completed, createdAt iyp updatedAt

export type Todo = {
    _id: string;
    title: string;
    completed: boolean;
    createdAt: string;
    updatedAt?: string;
    priority: 'low' | 'medium' | 'high'
}

//marka todo lasameenayo maxa qasab ah in lahelo
export type createTodoInput= {
    title: string;
    completed?: boolean;
    createdAt: string;
    updatedAt?: string,
    priority: 'low' | 'medium' | 'high'
}

//when make update, labada waa optional qasab mahan, yani user-ka can updates midku rabo
export type updateTodoInput = {
    title?: string;
    completed?: boolean;
}

//searchTodoInout type
export type searchTodoInput = {
    search: string;
    status: 'all' | 'completed' | 'active'
}