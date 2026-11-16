//mongo connection
import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.MONGO_URI;

if(!uri) {
    throw new Error('MONGO_URI environment variable is not defined')
}

let client: MongoClient;
let db: Db;

//method ankula xariireeno connection-ka database-ka
export async function connectionToDabase() {
    if(!client) {
        client = new MongoClient(uri as string);
        await client.connect();
        db = client.db('todo_app');
    }
    // bu client marka connection samayneeno ayan u bahanhy, db-ga when we make opertion like updating
    return { client, db}
}

//here collection those we need , wa ina collectionka helno
export async function getTodoCollection(): Promise<Collection> {
    if(!db){
        const {db : database} = await connectionToDabase();
        return database.collection('todos')
    }
    return db.collection('todos')
}

//if user and course comes u say like this
// export async function getUserCollection(): Promise<Collection>......
// export async function getCourseCollection(): Promise<Collection>...