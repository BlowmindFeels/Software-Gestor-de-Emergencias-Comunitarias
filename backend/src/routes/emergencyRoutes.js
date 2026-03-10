const express = require('express');
const router = express.Router();
const { listEmergencias, createEmergencia } = require('../controllers/emergencyController');

router.get('/', listEmergencias);
router.post('/', createEmergencia);

module.exports = router;
