const express = require('express');
const { getRegister, postRegister , getRegisters } = require('../controllers/register');

const router = express.Router(); 

//get :  localhost:3000/register/  
router.get('/', getRegister)
//get :  localhost:3000/register/registers  
router.get('/registers', getRegisters)
// post : localhost:3000/register/ => html 파일에서 fetch로 요청 
router.post('/', postRegister)

module.exports = router; 