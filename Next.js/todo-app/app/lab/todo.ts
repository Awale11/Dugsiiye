//fetch todos. marka laso aqrinaayo liiska
//marwalba oo database mise internet-ka wax laga doonaayo 'Promise'soo celi

import { ObjectId } from 'mongodb';
import { createTodoInput, searchTodoInput, Todo, updateTodoInput } from '../types/todo'
import { getTodoCollection } from './db'

export async function fetchTodos(): Promise<Todo[]> {

   try {

     const collection = await getTodoCollection();

    const todos = await collection.find().sort({createdAt : -1}).toArray();

    // functionkas kor marka wacano list-gan hoos ayuu nosoco celin doonaa
    return todos.map(todo => ({
        _id: todo._id.toString(),
        title: todo.title,
        completed: todo.completed,
        createdAt: todo.createdAt || new Date().toISOString(),
        updatedAt: todo.updatedAt || new Date().toISOString(),
        priority: todo.priority
    }))

   } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
   }
}

//here waa mid mid qaab id ahaan marka loso aqrinaayo
export async function fetchTodoById(id: string): Promise<Todo | null> {
    try {

        const collection = await getTodoCollection();
        const todo = await collection.findOne({_id : new ObjectId(id)});

        if(!todo){
            return null;
        }
        return {
            _id: todo._id.toString(),
            title: todo.title,
            completed: todo.completed,
            createdAt: todo.createdAt,
            updatedAt: todo.updatedAt,
            priority: todo.priority
            }

    } catch (error) {
        console.error('Error fetching todo by id:', error);
        return null;
    }
}

//when we making create
export async function createTodo(todo:createTodoInput): Promise<string | null>{

    try {
        const collection = await getTodoCollection();

        //relative times
        const now = new Date();
        const newTodo = {
            ...todo, 
            createdAt: now.toISOString(),
            updatedAt: now.toISOString(),
        }

        const result = await collection.insertOne(newTodo);

        //soo celi qofka ladiiwan galiyay id-giisa
        return result.insertedId.toString();
    } catch (error) {
        console.error('Error creating todo:', error);
        return null
    }
}

//updating one todo
export async function updateTodo(id: string, todo: updateTodoInput): Promise<boolean>{
    try {
        const collection = await getTodoCollection();

        const result = await collection.updateOne({_id: new ObjectId(id)}, 
        {
            $set: {
                ...todo,
                updatedAt: new Date().toISOString()
            }
            }
        );    
            
//meeqo qof ama row aya la update gareeyay ayuu kusheegi modifiedCount, hadiiba 0 ka weynthy, update-ka wuu dhacay demek true ayuu kuso celin doonaa
        return result.modifiedCount > 0;
    } catch (error) {
        console.error('Error updating todo:', error);
        return false;
    }
}

//update many todos= Seçilen Todo'ları tamamla
export async function completeManyTodos(ids:string[]): Promise<boolean> {
    try {
        const collection = await getTodoCollection();

        const objectIds = ids.map(id => new ObjectId(id));

        const result = await collection.updateMany(
            {_id: {$in: objectIds}},
            {$set: {
                completed: true,
                updatedAt: new Date().toISOString()
            }}
        );

//Burada matchedCount kullandık. Çünkü Todo zaten tamamlanmış olsa bile eşleşen kayıt bulunmuş demektir.
        return result.matchedCount > 0;
    } catch (error) {
        console.error('Error completing multiple todos:', error);
        return false;
    }
}

//update many todos=Seçilen Todo'ların tamamlanmasını kaldır
export async function incompleteManyTodos(ids: string[]): Promise<boolean> {
    try {
        const collection = await getTodoCollection();

        const objectIds = ids.map(id => new ObjectId(id));

        const result = await collection.updateMany(
            //MongoDB'ye şu sorguyu gönderiyoruz:
            { _id: { $in: objectIds } },
            //Seçilen bütün Todo'ların completed değerini false yapıyoruz.
            { $set: { 
                completed: false,
                updAtedAT: new Date().toISOString()
             } }
        );

        return result.matchedCount > 0;

    } catch (error) {
        console.error('Error marking multiple todos incomplete:', error);
        return false;
    }
}

//Delete= only one todo
export async function deleteTodo(id: string): Promise<boolean>{
    try {
        const collection = await getTodoCollection();

        const result = await collection.deleteOne({_id: new ObjectId(id)});

        return result.deletedCount > 0;
    } catch (error) {
        console.error('Errror deleting todo:', error);
        return false;
    }
}

//Delete Many todos
export async function deleteManyTodos(ids: string[]): Promise<boolean> {
    try {
        const collection = await getTodoCollection();
        //D listesini ObjectId'ye dönüştürdük
        const objectIds = ids.map(id => new ObjectId(id));

        const result = await collection.deleteMany({
            _id: {$in: objectIds}
        });
        return result.deletedCount > 0;
    } catch (error) {
        console.error('Error deleting multiple todos:', error);
        return false;
    }
}

//seacrhTodos function
export async function searchTodos(input: searchTodoInput): Promise<Todo[]> {
    try {
        const collection = await getTodoCollection();
        const query: any = {};

        //search condition
        if(input.search.trim()) {
            query.title = {
                $regex: input.search,
                $options: 'i'
            }
        }

        //complete filter
        if(input.status === 'completed') {
            query.completed = true;
        } else if (input.status === 'active') {
            query.completed = false;
        }

        const todos = await collection
            .find(query)
            .sort({createdAt: -1})
            .toArray();

        return todos.map(todo => ({
            _id: todo._id.toString(),
            title: todo.title,
            completed: todo.completed,
            createdAt: todo.createdAt,
            updatedAt: todo.updatedAt,
            priority:  todo.priority

        }));
    } catch (error) {
        console.error('Error searching todos:', error);
        return [];
    }
}