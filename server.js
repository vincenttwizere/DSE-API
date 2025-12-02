// Creating express server

const express = require('express');
const dotenv = require('dotenv');
const app = express();

const {db} = require ('./config/db.js');

// env file configuration

dotenv.config();

//Database connection
db.getConnection((err) => {

    if(err){
        console.log('Database connection failed', err);
    } else {
        console.log('Database connected successfully');
    }
});
// App listening port

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Routes and endpoints

app.get('/', (req, res) => {
    res.send('Welcome to DSE Backend API');
})

// App listening port

