import Server from './src/Server';
import { Routes } from './src/Routes';
import 'dotenv/config';

const port = process.env.PORT || 3002;
const app = Server();

Routes(app);

app.listen(port, () => console.log('Server listening: ' + port));