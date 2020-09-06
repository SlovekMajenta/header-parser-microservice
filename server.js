const express = require('express');
const app = express();

app.get('/api/whoami', (req,res)=>{
    const obj = {
        ipaddress: req.ip,
        language: req.get('Accept-Language'),
        software: req.get('User-Agent')
    }
    res.json(obj);
})


app.listen(3000, ()=>console.log("Server is now running"))