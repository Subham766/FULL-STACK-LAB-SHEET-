const router = require('express').Router();
router.get('/', (req, res) => res.json([{ id: 1, name: 'Aman' }, { id: 2, name: 'Riya' }]));
router.get('/:id', (req, res) => res.json({ id: req.params.id, message: 'Student details' }));
module.exports = router;
