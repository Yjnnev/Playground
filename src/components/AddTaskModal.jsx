
import { useState, useRef, useEffect } from "preact/hooks";
import "./AddTaskModal.css"

export function AddTaskModal({onClose, onSave}){
    const [task, setTask] = useState("");
    const inputRef = useRef(null);

    useEffect(
        () => inputRef.current.focus(), []
    );

    return (
        <div className="overlay">
            <div className="modal">
                <input 
                    ref={inputRef}
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