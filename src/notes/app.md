import { useState } from 'react'
import { TodoProvider } from './context'
/*
যখন তুই লেখস import { TodoProvider } from './context', তখন:

JavaScript engine বা bundler (যেমন Vite, Webpack, ইত্যাদি) অটো খুঁজে দেখে ./context ফোল্ডারে কি কোনো index.js বা index.jsx ফাইল আছে কিনা।

যদি পাই, তখন ধরে নেয়—"ওকে, তুমি চাইতেছো ./context/index.jsx এর ভিতরের জিনিস!"

অতএব, যদি TodoProvider named export হয় ওই index.jsx ফাইলে (বা ওখানে TodoContext.jsx থেকে import করা হয়), তাহলে সব কাজ একদম মাখনের মতো হয়ে যায়
*/
import './App.css'

function App() {

  const [todos, setTodos] = useState([])
  /*
    This is array destructuring. React gives you: <br> - todos: current value of the state <br> - setTodos: function to update that state
    💥Like saying: “Hey React, give me the value and the tool to change it”

        const newTodo = {
      id: Date.now(), // gives a unique ID using timestamp
      todo: inputValue, // the text entered by the user
      completed: false // by default, not completed
    };
    setTodos([...todos, newTodo]);
    };
  */

    const addTodo = (todo)=>{
      setTodos((prev)=>[{id:Date.now(),...todo}, ...prev])
      /*
      todo:
      addTodo({ todo: "Read 5 pages", completed: false });
      That object becomes the value of todo inside your function 🔍

      setTodos((prev) => [...prev, newTodo]);
      You're saying: “Hey React, take the current list (prev), add newTodo to it, and use that as the new state.”
      */
    }

    const updateTodo =(id,todo)=>{
      setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo : prevTodo)))
    }

    const  deleteTodo =(id)=>{
      setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
      /*
      setTodos((prev) => prev.filter(todo => todo.id !== id));

     💥 If you just tried using todos directly, and your state was updating super fast (like double clicks), React might get confused. Using prev makes sure you're always working with the most up-to-date version of the state.
      */
    }

    const toggleComplete=(id)=>{
      setTodos((prev)=>prev.map((prevTodo)=>prevTodo==id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
    }
    /*
    You're only using the first parameter that is element (todo)—totally fine if you don't need the index!
    */


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
