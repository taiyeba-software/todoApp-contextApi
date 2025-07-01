import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],/*
    📝 এটা হচ্ছে তোমার global state-এর initial "shape" — তুমি এখানে বলতেছো:

        todos: এটা todo list এর জন্য।

        addTodo, updateTodo, etc.: এগুলো future-এ actual logic নিয়ে আসবে, এখন শুধু placeholders (empty functions)।
    */

    addTodo:(todo)=>{},
    updateTodo: (id,todo) =>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

    export const useTodo=()=>{
        return useContext(TodoContext)
    }/*
    💡 তোমার একটা custom hook বানানো হইছে যাতে component গুলা থেকে context access করা যায় super easily.

      Instead of writing this every time:
      const { todos } = useContext(TodoContext);
    */

    export const TodoProvider = TodoContext.Provider /*
        🌱 এর মানে, তুমি Provider টাকে export করতেছো যাতে তোমার App.jsx-এ তুমি এইভাবে wrap করতে পারো:
    */