import { useEffect, useState } from "react";
import { getTasks } from "./api/tasks";
import "./styles/styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Ensures only renders once
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

  return (
    <div className="container">
      <h1>Task Manager</h1>

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
