const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const user = require('../users')


passport.use(new LocalStrategy())

const auth = (username, password, done) => {
    const user = users.getUser(username);

    if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
}