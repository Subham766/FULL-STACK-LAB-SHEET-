const router = require('express').Router();
let employees = [{ id: 1, name: 'Rahul', department: 'IT' }];
router.get('/', (req, res) => res.json(employees));
router.get('/:id', (req, res, next) => { const item = employees.find(e => e.id == req.params.id); if (!item) return next(Object.assign(new Error('Employee not found'), { status: 404 })); res.json(item); });
router.post('/', (req, res) => { const item = { id: employees.length ? Math.max(...employees.map(e => e.id)) + 1 : 1, ...req.body }; employees.push(item); res.status(201).json(item); });
router.put('/:id', (req, res, next) => { const i = employees.findIndex(e => e.id == req.params.id); if (i < 0) return next(Object.assign(new Error('Employee not found'), { status: 404 })); employees[i] = { ...employees[i], ...req.body, id: employees[i].id }; res.json(employees[i]); });
router.delete('/:id', (req, res, next) => { const i = employees.findIndex(e => e.id == req.params.id); if (i < 0) return next(Object.assign(new Error('Employee not found'), { status: 404 })); res.json(employees.splice(i, 1)[0]); });
module.exports = router;
