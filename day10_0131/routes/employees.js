const express = require('express')
const router = express.Router();
const  { getEmployees } = require('../controllers/employess');

router.get('/', getEmployees);
 
module.exports = router;