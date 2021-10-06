const express = require('express');
const { truncate } = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test@cluster0.2jeft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    userNewUralParser: true,
    useUnifiedTopology: true
});

const app = express()

app.get('/products', function(req, res){
    res.json({ 'sucsess': true})
})

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
    console.log('I am running!')
})

//mongodb+srv://test:<password>@cluster0.2jeft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority