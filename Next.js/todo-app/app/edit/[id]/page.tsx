
import Link from 'next/link';

import { notFound } from 'next/navigation';
import { updateTodoAction } from '@/app/actions/update';
import { fetchTodoById } from '@/app/lab/todo';
import { formatDate } from '@/app/utils/formDate';


export default async function EditTodo({params}: {params: {id: string}}) {

    const {id} = await params;
    const todo = await fetchTodoById(id);

     if (!todo) {
    notFound();
  }


  return (
    <main className="max-w-2xl mx-auto mt-10 p-6">
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Edit Todo</h1>
          <Link
            href="/"
            className="text-rose-600 hover:text-rose-800 transition-colors"
          >
            ← Back to Todos
          </Link>
        </div>

        {/* eski Todo kayıtlarında updatedAt bulunmayabilir. Böyle bir durumda createdAt değerini kullanarak hata oluşmasını önlüyoruz. */}
        <p className='text-sm text-gray-500 mb-4'>Last Updated: {formatDate(todo.updatedAt ?? todo.createdAt)}</p>

        <form action={updateTodoAction} className="space-y-4">
            <input type="hidden" name="id" value={todo._id} />

             <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Todo Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={todo.title}
                            placeholder="Enter your todo..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            maxLength={200}
                            autoFocus
                        />
                      <p className='text-xs text-gray-500 mt-1'>Maximum 200 characters</p>

                    </div>


          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Update Todo
            </button>
            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

