import express from 'express';
import route from './routes';

const app = express();
app.use(express.json());

app.post('/', (request, response) => {
  const { name, email } = request.body;
  const user = {
    name,
    email,
  };
  return response.json(user);
});

app.listen(3333, () => {
  console.log('🚀 listening on port 3333');
});
