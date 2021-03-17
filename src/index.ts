import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GetBreachesForEmail } from './lib/ApiManager';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/breaches/:account', (req, res) => {
  GetBreachesForEmail(req.params.account).then((data) => {
    res.send(data);
  });
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
})