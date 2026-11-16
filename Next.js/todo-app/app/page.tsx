
import { fetchTodos } from './lab/todo';
import TodoList from './components/TodoList';

export default async function Home() {

  //to do list ,we bring like this
  const todos = await fetchTodos();
  const time = new Date().toLocaleString();

  return (
  
    <main className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📝 Todo App</h1>
        <p className="text-sm text-gray-500 mb-4">Last updated: {time}</p>

        <TodoList todos = {todos} />

      </div>
    </main>
  
  );
}

