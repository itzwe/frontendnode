const express = require('express')
const router = express.Router();
const  { postLoginHandle, paramLoginHandle, loginHandle } = require('../controllers/login');

// GET :  localhost:3000/login  : 화면에 띄우기
router.get('/', loginHandle)

// GET :  localhost:3000/login/test01
router.get('/:userid', paramLoginHandle)

// POST : localhost:3000/login  : 아이디, 비번 넣고  로그인 버튼 클릭 
router.post('/', postLoginHandle)

module.exports = router;