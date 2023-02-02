const express = require('express');
const app = express();
const { logEvents } = require('./middleware/logEvents');
// 사용자가 만든 미들웨어
const fs = require('fs'); 
const path = require('path');
const register = require('./routes/register')
const login = require('./routes/login')
const searchId = require('./routes/searchId')
const searchPwd = require('./routes/searchPwd')
const products = require('./routes/products')
const root = require('./routes/root')
const employees = require('./routes/employees')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended :false}));
 
app.use((req, res, next)=>{ 
    logEvents(`${req.url}  ${req.method}`)
    next();
})

// MVC 모델 
// express의 사용자 미들웨어를 만듬 
app.use('/' , root);
app.use('/register', register);
app.use('/login', login);
app.use('/searchId', searchId);
app.use('/searchPwd', searchPwd);
app.use('/products', products);
app.use('/employees', employees);

app.get('/*', (req, res)=>{
    res.send('file not found');
})

app.listen(3000, ()=>{
    console.log('app listening ', 3000);
})

// regex 없이 js 함수로 처리해 보기
// login페이지 제작해서 로그인 해보기