const Comentario = require('../models/Comentario');

module.exports = app => {

    app.get('/', (req, res) => {
        Comentario.lista(res)

        console.log('GET lista comentarios');
    });

    app.post('/', (req, res) => {
        const comentario = req.body;
        Comentario.adiciona(comentario, res);

        console.log('POST comentario');
    });

    app.get('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Comentario.buscaPorId(id, res);

        console.log(`GET ouvir comentario ${id}`);
    });

}