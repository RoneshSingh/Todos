import { useState } from "react";

interface ToDoListProps {
  tasks: string[];
}

function ToDoList({ tasks }: ToDoListProps) {
  const [todoItems, setTodoItems] = useState<string[]>(tasks);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTodoItems((prevTodoItems) => [...prevTodoItems, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoItems.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
}

export default ToDoList;
