import pg from "pg"
import { pgconfig } from "./utils/pgconfig.js"

const { Pool } = pg

const pool = new Pool(pgconfig)

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error){
      console.warn(error)
      response.status(400).send("Error: can't reach database or problem while fetching users.")
    } else
      response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { channel } = request.body

  pool.query("INSERT INTO users (channel) VALUES ($1) RETURNING id", [ channel ],
  (error, results) => {
    if (error) {
      console.warn(error)
      response.status(400).send(`Can't add channel: ${channel}(Maybe it already exists?).`)
    } else {
      console.log(`Added channel: ${channel}`)
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    }
  })
}


const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.warn(error)
      response.status(400).send(`Can't delete user with ID: ${id}.`)
    } else
      response.status(200).send(`User deleted with ID: ${id}.`)
  })
}

export { getUsers, createUser, deleteUser }