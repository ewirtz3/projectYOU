const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
  new LocalStrategy(
    // Users will sign in using an email.
    {
      usernameField: "email",
    },
    (email, password, done) => {
      db.User.findOne({
        where: {
          email: email,
        },
      }).then((dbUser) => {
        // If findOne of user email does not return valid entry then it will return incorrect email.
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email.",
          });
        }
        // Returns incorrect password is email is correct, but password does not match.
        // else if (!dbUser.validPassword(password)) {
        //   return done(null, false, {
        //     message: "Incorrect password."
        //   });
        // }
        // If both password and email are correct, return user
        return done(null, dbUser);
      });
    }
  )
);

// Serialize is used to keep authentication accros all html endpoints.
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;
