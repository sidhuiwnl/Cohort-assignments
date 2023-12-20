const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
app.use(express.json())
let errorCount = 0;



app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  
  res.status(200).json({ errorCount });
});

app.use((error,req,res,next) =>{
  if(error){
    errorCount++
    res.status(404).json({error : 'Not found'})
  }
 
})



module.exports = app;