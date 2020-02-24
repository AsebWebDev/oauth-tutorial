// const dotenv = require('dotenv')
require('dotenv').config()
const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();
console.log(process.env.CLIENT_SECRET)
console.log("test")

// dotenv.config();

//set up view enginge
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes)

// create home rout
app.get('/', (req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log("App now listening for request on port 3000.")
});