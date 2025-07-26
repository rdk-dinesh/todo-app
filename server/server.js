const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { users } = require('./data')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());



// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({
      message: 'Login successful !',
      user: user.username,
      userId: user.id
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});


// Get tasks for user
app.get('/api/tasks', (req, res) => {
  const { userId } = req.query;
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user.tasks);
});

// Add task
app.post('/api/tasks', (req, res) => {
  const { userId, task } = req.body;
  if (!userId || !task) return res.status(400).json({ error: 'userId and task required' });

  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const newTask = {
    id: crypto.randomUUID(),
    task,
    isCompleted: false
  };

  user.tasks.push(newTask);
  res.status(201).json(newTask);
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  const user = users.find(user => user.id === userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const taskIndex = user.tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

  user.tasks.splice(taskIndex, 1);
  res.json(user.tasks);
});

// Toggle task isCompleted
app.patch('/api/tasks/:id', (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  const user = users.find(user => user.id === userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const task = user.tasks.find(task => task.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  task.isCompleted = !task.isCompleted;
  res.json(user.tasks);
});

// Update task text
app.put('/api/tasks/:id', (req, res) => {
  const { userId, task } = req.body;
  const { id } = req.params;

  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const todo = user.tasks.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Task not found' });

  todo.task = task;
  res.json(user.tasks);
});

// Get User Details

app.get('/api/user/details/:id', (req, res)=>{
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({name: user.name, email: user.email, phone: user.phone, address: user.address});
})

// Update User Details

app.patch('/api/user/details/:id', (req, res)=>{
  const { id } = req.params;
  console.log(id, req.body)
  const { name, email, phone, address } = req.body.details;
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) return res.status(404).json({ error: 'User not found' });
    users[userIndex] = {
    ...users[userIndex],
    name,
    email,
    phone,
    address
  };
  res.status(200).json(users[userIndex]);
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
