function TaskForm({
  newTask,
  description,
  dueDate,
  setNewTask,
  setDescription,
  setDueDate,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
