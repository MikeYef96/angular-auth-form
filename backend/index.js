const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

const users = [
  {
    first_name: 'Admin',
    last_name: 'User',
    email: 'admin@example.com',
    groups: ['Admin'],
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane.doe@example.com',
    groups: ['User'],
  },
  {
    first_name: 'John',
    last_name: 'Smith',
    email: 'john.smith@example.com',
    groups: ['User'],
  },
];

const assessments = [
  {
    id: 1,
    name: 'Customer Support',
    users_resolved: 142,
    active: true,
    image_url: 'https://placehold.co/40x40?text=CS',
  },
  {
    id: 2,
    name: 'Finance Review',
    users_resolved: 99,
    active: false,
    image_url: 'https://placehold.co/40x40?text=FR',
  },
  {
    id: 3,
    name: 'Product Quality',
    users_resolved: 73,
    active: true,
    image_url: 'https://placehold.co/40x40?text=PQ',
  },
];

const accounts = {
  'admin@example.com': {
    password: 'admin123',
    token: 'local-admin-token',
    role: 'Admin',
    first_name: 'Admin',
    last_name: 'User',
    email: 'admin@example.com',
    groups: ['Admin'],
  },
  'user@example.com': {
    password: 'user123',
    token: 'local-user-token',
    role: 'User',
    first_name: 'Regular',
    last_name: 'User',
    email: 'user@example.com',
    groups: ['User'],
  },
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const account = accounts[email];

  if (!account || account.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }

  return res.json(account);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/userassessments', (req, res) => {
  res.json(assessments);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Local backend is running. Use /api/login, /api/users, /api/userassessments, or /api/health.',
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Local backend running on http://localhost:${port}`);
});
