const router = require('express').Router();
let books = [{ id: 1, title: 'Node.js Guide', author: 'John' }, { id: 2, title: 'Express Basics', author: 'Mary' }];
router.get('/', (req, res) => res.json(books));
router.get('/:id', (req, res, next) => { const book = books.find(b => b.id == req.params.id); if (!book) return next(Object.assign(new Error('Book not found'), { status: 404 })); res.json(book); });
router.post('/', (req, res) => { const book = { id: books.length ? Math.max(...books.map(b => b.id)) + 1 : 1, ...req.body }; books.push(book); res.status(201).json(book); });
router.put('/:id', (req, res, next) => { const i = books.findIndex(b => b.id == req.params.id); if (i < 0) return next(Object.assign(new Error('Book not found'), { status: 404 })); books[i] = { ...books[i], ...req.body, id: books[i].id }; res.json(books[i]); });
router.delete('/:id', (req, res, next) => { const i = books.findIndex(b => b.id == req.params.id); if (i < 0) return next(Object.assign(new Error('Book not found'), { status: 404 })); res.json(books.splice(i, 1)[0]); });
module.exports = router;
