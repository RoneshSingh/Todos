import { useState } from "react";
import "../assets/to-do-list.css";

interface ToDoListProps {
  tasks: string[];
}

function ToDoList({ tasks }: ToDoListProps) {
  const [todoItems, setTodoItems] = useState<string[]>(tasks);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTodoItems((todoItems) => [...todoItems, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="todoDiv">
      <h2 className="todoh1">Todo List</h2>
      <ul className="todoUl">
        {todoItems.map((task, index) => (
          <li className="todoli" key={index}>
            {task}
            <button className="todoButton" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button className="todoButton" onClick={addTask}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
