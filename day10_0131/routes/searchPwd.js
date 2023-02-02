const express = require('express')
const router = express.Router();
const  { getSearchPwdHandle,  postSearchPwdHandle } = require('../controllers/searchPwd');

// GET :  localhost:3000/searchPwd  : 화면에 띄우기
router.get('/', getSearchPwdHandle)

// POST : localhost:3000/searchPwd  : 아이디, 비번 넣고  로그인 버튼 클릭 
router.post('/', postSearchPwdHandle)

module.exports = router;