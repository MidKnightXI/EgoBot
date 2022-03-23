import express from 'express';
import { getCommands } from './sources/commands.js';
import { getTables } from './sources/database.js';
import { getUsers, createUser, deleteUser } from './sources/users.js';

const app = express()
const port = 8080

app.use(
  express.urlencoded({
    extended: true,
  })
)

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

// database test:
app.get('/database/tables', getTables)