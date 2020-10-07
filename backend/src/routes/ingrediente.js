const Constroller = require('../controllers/Ingredientes');

module.exports = function(app) {
    const Ingredientes = new Constroller();

    app.get('/cadastros/ingredientes/listar', function(req, res) {
        Ingredientes.list(req, res);
    });

    app.get('/cadastros/ingredientes/get', function(req, res) {
        Ingredientes.get(req, res);
    });

    app.put('/cadastros/ingredientes/', function(req, res) {
        Ingredientes.set(req, res);
    });

    app.post('/cadastros/ingredientes/', function(req, res) {
        Ingredientes.post(req, res);
    });

    app.delete('/cadastros/ingredientes/del', function(req, res) {
        Ingredientes.del(req, res);
    });
}