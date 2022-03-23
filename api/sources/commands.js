import pg from "pg"
import { pgconfig } from "./utils/pgconfig.js"

const { Pool } = pg

const pool = new Pool(pgconfig)

const getCommands = (request, response) => {
  console.log(`getCommands body: ${request.body}`)
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