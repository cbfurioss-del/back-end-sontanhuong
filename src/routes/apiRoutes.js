const express = require('express');
const { getStatus, getUsers, createUser } = require('../controllers/apiController');

const router = express.Router();

router.get('/status', getStatus);
router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router;
