import pg from "pg"
import { pgconfig } from "./utils/pgconfig.js"

const { Pool } = pg

const pool = new Pool(pgconfig)

const getTables = (request, response) => {
  pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'", (error, results) => {
    if (error)
      throw error
    response.status(200).json(results.rows)
  })
}

export { getTables }