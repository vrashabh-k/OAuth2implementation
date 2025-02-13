const express = require('express');
const session = require('express-session');
const passport = require('passport');
const expressLayouts = require('express-ejs-layouts');
require('./auth');

const app = express();

// Set EJS as the view engine and use layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout'); // 👈 This tells EJS to use `layout.ejs` by default


 // Default layout

// Middleware
app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public')); // Serve static files (CSS, JS, images)

// Middleware to pass user data to all templates
app.use((req, res, next) => {
    res.locals.user = req.user; // Makes `user` available in all EJS views
    next();
});

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/dashboard',
        failureRedirect: '/auth/failure',
    })
);

app.get('/auth/failure', (req, res) => {
    res.render('error', { message: 'Something went wrong. Try again!' });
});

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard', { user: req.user });
});

app.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.redirect('/');
        });
    });
});

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
    req.user ? next() : res.redirect('/');
}

app.listen(5000, () => console.log('Server running on http://localhost:5000'));






// require('dotenv').config();
// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const path = require('path');
// require('./auth');

// const app = express();
// app.use(express.static('public'));

// // Set up view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

// // Session configuration
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false } // Change to `true` in production with HTTPS
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// // Middleware to check authentication
// function isLoggedIn(req, res, next) {
//     req.isAuthenticated() ? next() : res.redirect('/');
// }

// // Routes
// app.get('/', (req, res) => {
//     res.render('index', { user: req.user });
// });

// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// app.get('/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/protected',
//         failureRedirect: '/auth-failure',
//     })
// );

// app.get('/auth-failure', (req, res) => {
//     res.render('auth-failure');
// });

// app.get('/protected', isLoggedIn, (req, res) => {
//     res.render('protected', { user: req.user });
// });

// app.get('/logout', (req, res) => {
//     req.logout((err) => {
//         if (err) return next(err);
//         req.session.destroy(() => {
//             res.redirect('/');
//         });
//     });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
