require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/',(req,res) => {
    res.send("<h1>Hello World with Backend </h1>");
})

app.listen(PORT,() => {
    console.log(`server successfully running on http://localhost:${PORT}`);
})
