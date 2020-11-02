import Server from './src/Server';
import 'dotenv/config';
import { Routes } from './src/Routes';

const port = process.env.PORT || 3000;
const app = Server();

Routes(app);

app.listen(port, () => console.log('Server listening: ' + port));