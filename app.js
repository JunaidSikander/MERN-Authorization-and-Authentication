const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mernauth',{useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Successfully Connected to Database');
});

const User = require('./models/User');

const userInput = {
    username: "junicoder123",
    password: "123456",
    role: "admin"
};

const user = new User(userInput);
user.save((err,document) => {
    if(err)
        console.log(err);
    console.log(document);
});

app.listen(port, () => {
   console.log('Express server started');
});
