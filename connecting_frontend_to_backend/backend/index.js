import dotenv from 'dotenv';
dotenv.config();
import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

const jokes = [
    {
        id:0,
        joke:'What did the lava say to his girlfriend? “I lava you!”'
    },
    {
        id:1,
        joke:'Why can’t you ever tell a joke around glass? It could crack up.'
    },
    {
        id:2,
        joke:'What did one pickle say to the other? Dill with it'
    },
    {
        id:3,
        joke:' What social events do spiders love to attend? Webbings.'
    },
    {
        id:4,
        joke:'What did the lava say to his girlfriend? “I lava you!”'
    },
    {
        id:5,
        joke:'What do you call a guy who’s really loud? Mike'
    }
]

app.get('/',(req,res) => {
    res.send("<h1>Hello</h1>");
})

app.get('/api/jokes',(req,res) => {
    res.send(jokes);
})


app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
})