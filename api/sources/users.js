import { Pool } from "pg"

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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

export { getUsers, createUser, deleteUser }