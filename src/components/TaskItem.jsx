function TaskItem({ task, onDelete, onStatusChange }) {
  return (
    <li className="task-item">
      <div className="task-header">
        <strong className="task-title">{task.title}</strong>

        <button onClick={() => onDelete(task.id)} className="delete-btn">
          Delete
        </button>
      </div>

      {task.description && (
        <small className="task-description">{task.description}</small>
      )}

      <div className="task-meta">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <small>Status: {task.status}</small>
      <br />
      <small>Due: {new Date(task.due_date).toLocaleString()}</small>
    </li>
  );
}

export default TaskItem;
