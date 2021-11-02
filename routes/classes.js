const express = require('express');
const router = express.Router();

const ClassesController = require('../controllers/classes');

router.get('/', ClassesController.getAllClasses);

router.post('/', ClassesController.createClasses);

module.exports = router;
