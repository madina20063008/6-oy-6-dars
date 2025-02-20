import React, { useEffect, useState } from "react";
import axios from "axios";

export function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setTodos(response.data); // Fetch all 200 todos
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-2xl text-white">Loading...</div>;

    return (
        <div className="text-white p-6">
            <h1 className="text-4xl mb-6 text-white">Todos</h1>
            <ul className="space-y-4">
                {todos.map(todo => (
                    <li key={todo.id} className="border p-4 rounded-lg bg-gray-800">
                        <h2 className="text-xl font-bold">ID: {todo.id} | UserID: {todo.userId}</h2>
                        <h3 className="text-lg text-[#4E9F0D] font-semibold mt-2">{todo.title}</h3>
                        <p className={`mt-2 font-bold ${todo.completed ? "text-green-500" : "text-red-500"}`}>
                            {todo.completed ? "✅ Completed" : "❌ Not Completed"}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
