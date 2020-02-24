const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth');
const keys = require('./keys')

passport.use(new GoogleStrategy({
        // options for the googe strategy
        keys
    }), () => {
        //passport callback function
    }
)