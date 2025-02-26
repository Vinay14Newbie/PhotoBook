import express from 'express';
import { PORT } from './config/serverConfig.js';
import { createServer } from 'http';
import connectDB from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

app.use('/api', apiRouter);

server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
  connectDB();
});
