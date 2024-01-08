const express = require('express');
const { createCard } = require('./types');
const { Card } = require('./db')
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());

app.post('/card',async(req,res)=>{
    const createPayload = req.body;
    const verifyPayload = createCard.safeParse(createPayload);
    if(!verifyPayload.success){
        res.status(411).json("Sented wrong input");
        return
    }
    await Card.create({
        name : createPayload.name,
        description : createPayload.description,
        Interest : createPayload.interest,
        githublink : createPayload.githublink,
    })
    res.status(200).json({msg : "card details added"})
})

app.get('/Cards',async(req,res) =>{
    const card = await Card.find();
    res.json(card)
})


app.listen(3000,() =>{
    console.log('Server running on port 3000')
})