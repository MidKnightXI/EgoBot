import express from 'express';
import { getUsers, createUser, deleteUser } from './sources/users';

const app = express()
const port = 3000

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

app.get('/', (request, response) => {
  response.json({ info: 'hello world' })
})

// users route:
app.get('/users', getUsers)
app.post('/users', createUser)
app.delete('/users/:id', deleteUser)