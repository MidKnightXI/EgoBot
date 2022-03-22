import pg from "pg"
import { pgconfig } from "./utils/pgconfig.js"

const { Pool } = pg

const pool = new Pool(pgconfig)

const getUsers = (request, response) => {
  pool.query('SELECT * FROM Channel ORDER BY id ASC', (error, results) => {
    if (error)
      throw error
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name } = request.body;

  pool.query("INSERT INTO Channel (name) VALUES ($1) RETURNING id", [ name ],
  (error, results) => {
  if (error)
    throw error
  response.status(201).send(`User added with ID: ${results.rows[0].id}`)
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