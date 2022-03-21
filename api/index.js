import express from 'express';
import { Pool } from 'pg';

const app = express()
const port = 3000

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

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

const getUsers = (request, response) => {
  pool.query('SELECT * FROM Channels ORDER BY id ASC', (error, results) => {
    if (error)
      throw error
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1)', [ name ], (error, results) => {
    if (error)
      throw error
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error)
      throw error
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}