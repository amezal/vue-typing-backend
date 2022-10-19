import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import usersRouter from './routes/users'
import bodyParser from 'body-parser';

const app = express()
const PORT = process.env.PORT

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/users/', usersRouter)

app.get('/', (_req, res) => {
  res.send('Jelou')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})