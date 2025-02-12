require('dotenv').config();
const express= require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');

const app = express();
app.use(session({ secret:process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req,res,next){
    req.user ? next(): res.sendStatus(401);
}

app.get('/', (req,res)=>{
    res.send('<a href="/auth/google">Authenticate with Google</a>')
});

app.get('/auth/google',
    passport.authenticate('google',{scope:['email','profile']})
);

app.get('/google/callback',
    passport.authenticate('google',{
        successRedirect:'/protected',
        failureRedirect:'/auth/failure',
    })
);

app.get('/auth/failure',(req,res)=>{
    res.send('something went wrong..');
}); 

app.get('/protected', isLoggedIn, (req,res)=>{
    res.send(`Hello ${req.user.displayName}`);
    
});

app.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err); // Handle errors properly
        req.session.destroy(() => {
            res.redirect('/'); // Redirect to home after logout
        });
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('listening on port 5000'));
