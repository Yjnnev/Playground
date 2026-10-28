
import { useState } from "preact/hooks";
import { AddTaskModal } from "./AddTaskModal";
import "./mini-todo.css"


export function MiniTodo(){
    const [todos, setTodos] = useState([
        {id: 1, text: "Learn Preact"}, 
        {id: 2, text: "Drink Water"}
    ]);

    const [modalIsVisible, setModalVisibility] = useState(false);

    function addTodo(text){
        const trimmed = text.trim();
        const newTodo = { 
            id: Date.now(),
            text: trimmed
        }

        if (trimmed !== "") 
            setTodos([...todos, newTodo]);
        setModalVisibility(false);
    }

    function deleteTodo(textID){
        setTodos(todos.filter(
            (todo) => { return todo.id !== textID }
        ));
    }

    return (
        <div className="todo">
            <button onClick={() => setModalVisibility(true)}>Add</button>
            <h1>My Todo list!</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        <span>{index + 1}. {todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>

            { modalIsVisible &&
                <AddTaskModal
                    onClose={() => setModalVisibility(false)}
                    onSave={addTodo}
                />
            }
        </div>
    )
}