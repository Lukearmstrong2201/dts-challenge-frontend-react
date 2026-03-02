import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
import {
  getTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "./api/tasks";

import "./styles/styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

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

    if (!newTask.trim() || !dueDate) return;

    try {
      const createdTask = await createTask({
        title: newTask,
        description: description || null,
        status: "pending",
        due_date: new Date().toISOString(),
      });

      setTasks([...tasks, createdTask]);
      setNewTask("");
      setDueDate("");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      const updatedTask = await updateTaskStatus(taskId, newStatus);

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task)),
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm
        newTask={newTask}
        description={description}
        dueDate={dueDate}
        setNewTask={setNewTask}
        setDescription={setDescription}
        setDueDate={setDueDate}
        onSubmit={handleSubmit}
      />

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
