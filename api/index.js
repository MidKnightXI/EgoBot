import express from 'express';
import cors from 'cors'

import { createCommand, getCommands } from './sources/commands.js';
import { getTables } from './sources/database.js';
import { getUsers, createUser, deleteUser } from './sources/users.js';
import { twitchRedirection } from './sources/authTwitch.js';

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
app.get("/auth/twitch", twitchRedirection);
app.get("/auth/twitch/callback",);

// database test:
app.get('/database/tables', getTables)