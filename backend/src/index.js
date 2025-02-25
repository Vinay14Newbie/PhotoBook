import express from 'express';
import { PORT } from './config/serverConfig.js';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
