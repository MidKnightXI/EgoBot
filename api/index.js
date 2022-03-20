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