import express from 'express'
import UserRoute from './routes/UserRoute'
import CalendarRoute from './routes/CalendarRoute'

const app = express()

app.use(express.json())
app.use('/api', UserRoute, CalendarRoute)

app.listen(3003, () => {
  console.log("Application listening at http://localhost:3003")
})