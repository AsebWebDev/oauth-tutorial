const express = require('express');
const authRouter = require('./routes/auth-routes');

const app = express();


//set up view enginge
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRouter)

// create home rout
app.get('/', (req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log("App now listening for request on port 3000.")
});

