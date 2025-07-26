# Full-Stack Todo Application

A simple full-stack Todo App built with **React** on the frontend and **Node.js/Express** on the backend. This app supports user login, task management (add/edit/delete/complete), and user profile updates with persistent data using `redux-persist`.

---

## Project Structure

```
/todo-app/
├── /client/       → React frontend
├── /server/       → Express backend
├── package.json   → Root scripts for running both servers
```

---

## Features

### Frontend (React)
- React functional components with Hooks
- Redux with `redux-thunk` and `redux-persist`
- Login/Logout flow
- User profile view and edit
- Add/Delete/Edit/Complete todos
- Filter/search tasks
- Responsive design using SCSS & CSS

### Backend (Node.js + Express)
- RESTful API endpoints
- User authentication (mock)
- CRUD operations for todos

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2. Install root, client, and server dependencies

```bash
npm install
npm run install-all
```

> Create a root-level script in `package.json` like this:
```json
"scripts": {
  "install-all": "npm install --prefix client && npm install --prefix server"
}
```

---

## 📦 Running the App

### Start both client and server together (dev mode):
```bash
npm start
```

> This uses `concurrently` to run both servers. Add this to your root `package.json`:
```json
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run client\"",
  "client": "npm --prefix client start",
  "server": "npm --prefix server start"
}
```

## Requirements

- Node.js version **21 or above**
---

## 🌐 Available Scripts

### In `/client` (React):

```bash
npm start       # Runs frontend on http://localhost:3000
npm run build   # Builds production-ready frontend
```

### In `/server` (Express):
```bash
npm start       # Runs backend on http://localhost:5000
```

---
