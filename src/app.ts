import express from 'express'
import user from './routes/UserRoute'
import calendar from './routes/CalendarRoute'

const app = express()

app.use(express.json())
app.use('/api', user, calendar)

app.listen(3003, () => {
  console.log("Application listening at http://localhost:3003")
})