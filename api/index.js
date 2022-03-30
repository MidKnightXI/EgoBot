import express from 'express';
import passport from 'passport'
import { Strategy } from 'passport-twitch-new'
import cors from 'cors'

import { createCommand, getCommands } from './sources/commands.js';
import { getTables } from './sources/database.js';
import { getUsers, createUser, deleteUser } from './sources/users.js';

const app = express()
const port = 8080

const corsOpt = {
  origin: '*',
  methods: [
    'GET',
    'POST',
    'OPTIONS'
  ],
  allowedHeaders: [
    'Content-Type',
    'Authorization'
  ],
};

app.use(cors(corsOpt));

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.options('*', cors())

app.listen(port, (err) => {
  if (err)
      return console.error(err);
  return console.log(`Server is listening on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// users routes:
app.get('/users', getUsers)
app.post('/users', createUser)
app.delete('/users/:id', deleteUser)

// commands routes:
app.get('/commands/:id', getCommands)
app.post('/commands', createCommand)

// twitch authentification:
passport.use(new Strategy({
    clientID: process.env.TWITCH_ID,
    clientSecret: process.env.TWITCH_SECRET,
    callbackURL: "http://localhost:8080/auth/twitch/callback/",
    scope: "user_read"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    console.log(accessToken)
    return accessToken;
  }
));
app.get("/auth/twitch", function(req, res) {
  passport.authenticate("twitch", {forceVerify: true})(req, res)
});
app.get("/auth/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/" }),
  function(req, res) {
    res.redirect("/")
  }
);

// database test:
app.get('/database/tables', getTables)