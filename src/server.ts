import { app } from './app';
import { port } from './config';

app.get('/', async (req, res) => {
  res.send('I am on...' + ' ' + port);
});
app.listen(port, () => console.log('I am on...' + port));
