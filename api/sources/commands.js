import pg from "pg"
import { pgconfig } from "./utils/pgconfig.js"

const { Pool } = pg

const pool = new Pool(pgconfig)

const getCommands = (request, response) => {
  const channel = request.params.id

  pool.query("SELECT * FROM command WHERE channel_name = $1", [ channel ],
  (error, results) => {
    if (error) {
      console.warn(error)
      response.status(400).send("Error: can't reach database or table empty")
    } else {
      response.status(200).send(results.rows)
    }
  })
}

const createCommand = (request, response) => {
  const { channel, cmd_name, cmd_action } = request.body
  console.log(`getCommands body: ${request.body}`)
}


const deleteCommand = (request, response) => {
  const id = parseInt(request.params.id)
  console.log(`Command id to delete: ${parseInt(request.params.id)}`)
}

export { getCommands, createCommand, deleteCommand }