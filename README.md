# dts-challenge-frontend-react# Task Manager – Frontend

This is the React frontend for the Task Manager application.

It connects to the dts-challenge-backend repository.

The backend must be running locally for the frontend to function correctly.

## Project Setup

Both repositories should be located inside the same shared parent folder: dts-challenge-projects

The frontend communicates with the backend via REST API.

---

## How to run this project

### Install Dependencies

Navigate to the frontend directory:

```bash
cd task-manager-frontend
```

```bash
npm install
```

## Ensure backend is running

Please follow the instructions in README.md file in the dts-challenge-backend repository.

If your backend runs on a different port, Update the API base URL in the file src/api/tasks.js as shown below.

example: const API_URL = "http://localhost:8000";

## Start frontend

```bash
npm run dev
```

The application will be availeble at [frontend address](http://localhost:5173)
