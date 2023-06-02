const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

let arr = [];
for(let i = 0; i<10;i++){
    arr.push({id:`${i}`,name:'阿'+ i})
}

// app.get('/',(req,res)=>{
//     res.send(arr)
// })
app.get('/user/query',(req,res)=>{
    res.send(arr)
    
})
app.listen(3001,()=>{
    console.log('3001')
})