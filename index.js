const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./src/routes/route.js');
const multer = require('multer')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(multer().any())

dotenv.config({path : './config.env'});

const PORT = process.env.PORT || 5000;

app.use(express.json());


// app.use('/uploadImage', express.static('uploadImage'));


mongoose.connect(process.env.DB_CON, { useNewUrlParser : true})
.then(()=> {console.log('DB Conncted Successfully 🎧')})
.catch((err) => {console.log(err.message)})

app.use('/', routes)


app.listen(PORT , () => {
    console.log(`Application is running on 🌎 ${5000} Port`)
})