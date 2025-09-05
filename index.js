const express = require('express');
const app = express();
const port = 3000;

app.get('/sum', (req, res) => {
    try {
        const a =+ req.query.a;
        const b =+ req.query.b;
        const sum = a + b;
        res.status(200).json({ sum });
    }
    catch(e){
        console.log(e);
        res.status(400).json({msg : "something went wrong"});
    }
})

app.listen(port, () => {
    console.log("server started at port ", port);
})