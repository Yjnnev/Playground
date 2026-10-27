
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
                    onKeyDown={
                        (e) => {
                            if (e.key === "Enter") onSave(task);
                        }
                    }
                />

                <button onClick={() =>  onSave(task) }>Add</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}