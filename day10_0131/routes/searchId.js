const express = require('express')
const router = express.Router();
const  { getSearchIdHandle,  postSearchIdHandle } = require('../controllers/searchId');

// GET :  localhost:3000/searchId  : 화면에 띄우기
router.get('/', getSearchIdHandle)

// POST : localhost:3000/searchId  : 아이디, 비번 넣고  로그인 버튼 클릭 
router.post('/', postSearchIdHandle)

module.exports = router;