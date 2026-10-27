
import { useState } from "preact/hooks";
import "./AddTaskModal.css"

export function AddTaskModal({isOpen, onClose, onSave}){
    const [task, setTask] = useState("");

    if (!isOpen) return null;
    else return (
        <div className="overlay">
            <div className="modal">
                <input 
                    placeholder="Enter a todo"
                    value={task}
                    onInput={(e) => setTask(e.currentTarget.value)}
                />
                <button onClick={() => { onSave(task); setTask("") }}>Add</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}