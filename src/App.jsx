import { useEffect, useState } from "react";
import { getTasks, createTask } from "./api/tasks";
import "./styles/styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Ensures only renders on dependency change
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newTask.trim() === "") return;

    try {
      const createdTask = await createTask({
        title: newTask,
        description: null,
        status: "pending",
        due_date: new Date().toISOString(),
      });

      setTasks([...tasks, createdTask]);
      setNewTask("");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
