
import { useState } from "react";
import { InputComponent } from "./components/InputComponent";

export const AppComponent = () => {

  const [todos, setTodos] = useState([]);

  const onAddTodo = (newTodo)=>{
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <main className="h-screen bg-slate-300 ">
        <div className="flex justify-center">
          <div className="flex items-center">
            <h1 className="text-center text-5xl	font-bold text-slate-800 p-6 ">
              ToDo List{" "}
            </h1>{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <InputComponent 
        onNewTodo={(value) => onAddTodo(value)}
        />

        {
          todos.map((todo) => (
            todo
          ))
        }
      </main>
    </>
  );
};
