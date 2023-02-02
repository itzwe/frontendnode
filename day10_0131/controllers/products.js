const path = require('path');
const products = require('../model/products.json');
const fs = require('fs');

const getProducts = (req, res)=>{
    //res.send('getProducts')
    res.json( products );
}
const getParamProduct = (req, res)=>{
    // res.send('getParamProduct')
    const id = req.params.id;
    console.log( id );
    const findData = products.find( product => product.id === parseInt(id) );
    res.send( findData ); 
}
const createProduct = (req, res)=>{
    // res.send('createProduct')
    // {
    //     "id": 1,
    //     "name": "html",
    //     "price": "57457",
    //     "status": "step1"
    //   }
    const id = products[products.length - 1].id + 1;
    const name = req.body.name;
    const price = req.body.price;
    const status = req.body.status;
    const newProduct =  { id, name, price, status }

    products.push( newProduct );
    // file로 쓰진 않고 배열에 쓰기  

    fs.writeFile(path.join(__dirname, '..' , 'model', 'products.json'),
        JSON.stringify( products, null,  ' '), 
        'utf-8',
        (err)=>{
            console.log(err)
            res.send( {success : false, message : '파일 쓰기 중 에러 발생 ' });
        }
    )
    // res.send( newProduct );
    res.send( {success : true, data : newProduct });
}

const updateProduct = (req, res)=>{
    res.send('updateProduct')
}
const deleteProduct = (req, res)=>{
    res.send('deleteProduct')
}

module.exports = { getProducts, 
    getParamProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct}