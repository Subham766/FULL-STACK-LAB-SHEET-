require('dotenv').config();
const express = require('express');
const studentsRouter = require('./routes/students');
const booksRouter = require('./routes/books');
const membersRouter = require('./routes/members');
const employeesRouter = require('./routes/employees');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

function apiKeyCheck(req, res, next) {
  if (!req.headers['x-api-key']) return res.status(403).json({ error: 'Forbidden: x-api-key required' });
  next();
}

app.get('/', (req, res) => res.send('Express Lab Running'));
app.get('/about', (req, res) => res.json({ name: 'Subham Kr. Sinha', rollNo: 57 }));
app.get('/courses', (req, res) => res.json(['Full Stack Web Development', 'Computer Networks', 'Data Structures']));
app.post('/echo', (req, res) => res.json(req.body));
app.get('/students/:id', (req, res) => res.json({ id: req.params.id, message: 'Student details' }));
app.get('/search', (req, res) => res.json({ name: req.query.name || null, age: req.query.age || null }));
app.get('/products/:category/:id', (req, res) => res.json(req.params));
app.use('/admin', apiKeyCheck);
app.get('/admin/dashboard', (req, res) => res.json({ message: 'Protected dashboard data' }));
app.post('/register', (req, res) => res.json({ message: `Registration successful for ${req.body.name}` }));
app.post('/contact', (req, res) => { console.log(req.body); res.json({ message: 'Thank you for contacting us' }); });

app.use('/api/students', studentsRouter);
app.use('/api/books', booksRouter);
app.use('/api/members', membersRouter);
app.use('/api/employees', employeesRouter);
app.use('/api', apiKeyCheck);

app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, next) => { console.error(err); res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' }); });

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
