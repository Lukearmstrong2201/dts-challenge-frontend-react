import axios from "axios";

// Address to bakend server
const API_URL = "http://127.0.0.1:8000";

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};
