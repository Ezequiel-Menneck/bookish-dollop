import express, { Request, Response } from 'express'
import user from './routes/user'
import dates from './routes/calendar'

const app = express()

app.use(express.json())
app.use('/api', user)
app.use('/api', dates)

app.listen(3003, () => {
  console.log("Application listening at http://localhost:3003")
})