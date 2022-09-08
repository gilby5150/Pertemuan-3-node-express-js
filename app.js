// const http = require('http');
const fs = require('fs');

// function routes
// const routes = (path,res)=>{
//     fs.readFile(path,(err,data)=>{
//         if(err){
//             res.writeHead(404);
//             res.write("Error : page not found");
//         }else{
//             res.write(data)
//         }
//         res.end();
//     })
// }

// http
//     .createServer((req,res)=>{
//         const url = req.url;
//         console.log(url);

//         res.writeHead(200,{
//             'Content-Type': 'text/html'
//         });
//         if (url==='/about') {
//            routes('./about.html',res);
//         }else if (url==='/contact') {
//             routes('./contact.html',res);
//         } else {
//             routes('./index.html',res);
//         }
//     })
//     .listen(3000,()=>{
//         console.log('Server is listening on port 3000');
//     });


const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname+'/contact.html'));
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname+'/about.html'));
})
app.use('/',(req,res)=>{
    res.status(404)
    res.send('<h1>PAGE NOT FOUND : 404</h1>');
})
app.listen(port,() =>{
    console.log(`Example app listening on port${port}`);
})