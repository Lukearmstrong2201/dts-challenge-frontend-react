import { useEffect, useState } from "react";
import { getTasks } from "./api/tasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>DTS Task Manager</h1>

      <TaskForm onTaskCreated={fetchTasks} />

      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && tasks.length === 0 && (
        <p>No tasks yet. Add one above.</p>
      )}

      <TaskList tasks={tasks} refresh={fetchTasks} />
    </div>
  );
}

export default App;
