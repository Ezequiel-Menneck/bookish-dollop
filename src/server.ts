import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute';
import CalendarRoute from './routes/CalendarRoute';

const app = express();

const allowedOrigins = ['http://localhost:3003'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());
app.use('/api', UserRoute, CalendarRoute);

app.listen(3003, () => {
  console.log('Application listening at http://localhost:3003');
});
