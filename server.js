const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfuly connected to MongoDB!'))
    .catch(err => console.error('Connection error', err))

const PORT = process.env.PORT || 4000;

const app = express();

console.log(process.env.PORT)

// ======= MIddlewares =======
app.use(morgan('dev')); //logger
app.use(express.json());    //body parser

// ======= Routes =======
app.use('/api/user', require('./routes/userRoutes'))

app.get('/', (req,res) => {
    res.send('Welcome to my API!')
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})