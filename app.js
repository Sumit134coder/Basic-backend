const express = require('express')
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})

app.get('/' , (req,res)=>{

    var array = [1,2,23,4,5,6,7,8];
    let result = array.map((item)=>{
        return item*2;
    })
    console.log(result)
    res.json(result)
})