import axios from "axios";

// Address to bakend server
const API_URL = "http://127.0.0.1:8000";

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(`${API_URL}/tasks`, taskData);
  return response.data;
};

export const updateTaskStatus = async (taskId, status) => {
  const response = await axios.patch(`${API_URL}/tasks/${taskId}/status`, {
    status,
  });

  return response.data;
};
