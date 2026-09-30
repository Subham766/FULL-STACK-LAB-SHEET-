const router = require('express').Router();
let members = [{ id: 1, name: 'Aman', email: 'aman@example.com' }];
router.get('/', (req, res) => res.json(members));
router.get('/:id', (req, res, next) => { const item = members.find(m => m.id == req.params.id); if (!item) return next(Object.assign(new Error('Member not found'), { status: 404 })); res.json(item); });
router.post('/', (req, res) => { const item = { id: members.length ? Math.max(...members.map(m => m.id)) + 1 : 1, ...req.body }; members.push(item); res.status(201).json(item); });
router.put('/:id', (req, res, next) => { const i = members.findIndex(m => m.id == req.params.id); if (i < 0) return next(Object.assign(new Error('Member not found'), { status: 404 })); members[i] = { ...members[i], ...req.body, id: members[i].id }; res.json(members[i]); });
router.delete('/:id', (req, res, next) => { const i = members.findIndex(m => m.id == req.params.id); if (i < 0) return next(Object.assign(new Error('Member not found'), { status: 404 })); res.json(members.splice(i, 1)[0]); });
module.exports = router;
