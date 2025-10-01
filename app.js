const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRoute = require('./src/routes/userRoute');
app.use(userRoute)


//conexão com o banco
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Fatec';
const mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})