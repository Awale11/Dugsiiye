"use client";

import React, { useState, useTransition } from "react";
import { toggleTodoAction } from "../actions/toggle";
import Link from "next/link";
import { deleteTodoAction } from "../actions/delete";
import { searchTodosAction } from "../actions/search";
import { Todo } from "../types/todo";
import { bulkDeletedTodoAction } from "../actions/bulkDelete";
import { bulkCompleteTodosAction, bulkIncompleteTodosAction } from "../actions/bulkUpdate";
import { formatDate } from "../utils/formDate";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  const [selectedPriority, setSelectedPriority] = useState("all");

  //useState for search
  //arama kutusundaki metni tutar
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<"all" | "completed" | "active">("all");
  //Server Action'dan gelen sonuçları tutar.
  const [searchResult, setSearchResult] = useState<Todo[]>(todos);
  //Arama işleminin devam edip etmediğini belirtir.
  const [isPending, startTransaction] = useTransition();

  //for select multiple checkbox
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);

  const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransaction(async () => {
      const result = await searchTodosAction({
        search,
        status,
      });
      setSearchResult(result);
    });
  };

  const handleToggle = (id: string) => {
    startTransaction(async () => {
      //first we change mongoDB's completed value
      await toggleTodoAction(id);
      //here waa updated data
      const results = await searchTodosAction({
        search,
        status,
      });
      //update the state of react
      setSearchResult(results);
    });
  };

  const handleBulkDelete = () => {
    if (selectedTodos.length === 0) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete ${selectedTodos.length} todos?`,
    );

    if (!confirmed) return;

    startTransaction(async () => {
      // Seçilen ID'leri Server Action'a gönderir.
      const success = await bulkDeletedTodoAction(selectedTodos);

      if (success) {
        //Silme işleminden sonra seçimi temizler.
        setSelectedTodos([]);

        const results = await searchTodosAction({
          search,
          status,
        });
        //Güncel listeyi ekranda gösterir.
        setSearchResult(results);
      }
    });
  };

  const handleBulkComplete = ()=> {
    if(selectedTodos.length === 0) return;

    startTransaction(async () => {
      const success = await bulkCompleteTodosAction(selectedTodos);

      if(success){
        setSelectedTodos([]);

      const results = await searchTodosAction({
        search,
        status
      });
      setSearchResult(results)
      }
    })
  };

  const handleBulkIncomplete = ()=> {
    if(selectedTodos.length === 0) return; 

    startTransaction(async () => {
      const success = await bulkIncompleteTodosAction(selectedTodos);

      if(success) {
        setSelectedTodos([]);

        const results = await searchTodosAction({
          search,
          status
        });
        setSearchResult(results)
      }
    })
  }

  const filteredTodos = searchResult.filter(
    (todo) => selectedPriority === "all" || todo.priority === selectedPriority,
  );

  return (
    <>
      <div className="mb-6 flex justify-between ">
        <Link
          href="/new"
          className="inline-flex items-center px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
        >
          ➕ Add New Todo
        </Link>

        {/* for search */}
        <form className="mb-4" onSubmit={handleSearch}>
          <div className="space-x-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search todos..."
              className="border rounded-lg p-2 flex-1"
            />

            <button
              type="submit"
              disabled={isPending}
              className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 cursor-pointer"
            >
              {isPending ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      <select
        className="border rounded-lg p-2 mb-4"
        value={status}
        onChange={(e) => {
          const newStatus = e.target.value as "all" | "completed" | "active";
          setStatus(newStatus);

          startTransaction(async () => {
            const results = await searchTodosAction({
              search,
              status: newStatus,
            });
            setSearchResult(results);
          });
        }}
      >
        <option value="all">All Todos</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>

      <select
        className="ml-4 border rounded-lg p-2 mb-4"
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div className="flex justify-between">
        {/* for select all checbox */}
        <label className="flex items-center gap-2 mb-4">
          <input
            className="text-4xl font-semibold text-gray-800"
            type="checkbox"
            checked={
              filteredTodos.length > 0 &&
              filteredTodos.every((todo) => selectedTodos.includes(todo._id))
            }
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedTodos(filteredTodos.map((todo) => todo._id));
              } else {
                setSelectedTodos([]);
              }
            }}
          />
          Select All
        </label>

        {/* Bulk delete button */}
        {selectedTodos.length > 0 && (
          <button
            type="button"
            onClick={handleBulkDelete}
            disabled={isPending}
            className="bg-rose-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-rose-700 cursor-pointer"
          >
            {isPending
              ? "Deleting..."
              : `Delete Selected (${selectedTodos.length})`}
          </button>
        )}

        {/* completed ve incompleted buttons */}
        {selectedTodos.length > 0 && (
          <div className="flex gap-2 mb-4">
            <button
            type="button"
            onClick={handleBulkComplete}
            disabled={isPending}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer"
            >
              Mark Complete ({selectedTodos.length})
            </button>

            <button
            type="button"
            onClick={handleBulkIncomplete}
            disabled={isPending}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 cursor-pointer"
            >
              Mark Incomplete ({selectedTodos.length})
            </button>
          </div>
        )}
      </div>

      {/* //for selectedTodos checkbox */}
      {selectedTodos.length > 0 && (
        <p className="text-ms text-gray-600 mb-3">
          {selectedTodos.length} Todos Selected
        </p>
      )}


      {todos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No todos yet!</p>
          <p className="text-gray-400 text-sm mt-2">
            Create your first todo to get started.
          </p>
        </div>
      ) : filteredTodos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-rose-600">
            No todos found for this priority
          </p>
        </div>
      ) : searchResult.length === 0 ? (
        <p className="text-rose-600 text-lg">No todos found!</p>
      ) : (
        <div className="space-y-3 ">

          {filteredTodos.map((todo) => (
            <div
              key={todo._id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4"
            >
              
              {/* Toggle */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  //ilgili Todo'nun ID'sinin seçili listede olup olmadığını kontrol eder.
                  checked={selectedTodos.includes(todo._id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      //Mevcut seçili ID'leri korur ve yeni ID'yi listeye ekler.
                      setSelectedTodos([...selectedTodos, todo._id]);
                    } else {
                      //Seçimi kaldırılan Todo'nun ID'sini listeden çıkarır.
                      setSelectedTodos(
                        selectedTodos.filter((id) => id !== todo._id),
                      );
                    }
                  }}
                />

                <button
                  type="button"
                  onClick={() => handleToggle(todo._id)}
                  disabled={isPending}
                  className="text-2xl hover:scale-110 transition-transform"
                  title={
                    todo.completed ? "Mark as incomplte" : "Mark as complete"
                  }
                >
                  {todo.completed ? "✅" : "⬜"}
                </button>

                <span
                  className={`flex-1 text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                >
                  {todo.title}
                </span>
              </div>

              <p className="text-xs text-gray-500">Created At: {formatDate(todo.createdAt)}</p>

              <div className="flex items-center space-x-2">
                <Link
                  href={`/edit/${todo._id}`}
                  className="p-2 text-rose-600 hover:bg-blue-100 rounded-md transition-colors"
                  title="Edit todo"
                >
                  ✏️
                </Link>

                <form action={deleteTodoAction.bind(null, todo._id)}>
                  <button
                    type="submit"
                    className="p-2 text-rose-600 hover:bg-rose-100 rounded-md transition-colors cursor-pointer"
                    title="Delete todo"
                  >
                    🗑️
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
