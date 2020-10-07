const server = require('./Server');

const app = server();

app.listen(3001, () => {
    console.log('Server on: 3001');
});

app.get('/', (req, res) => res.send('Hello World!'));