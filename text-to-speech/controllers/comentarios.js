module.exports = app => {

    app.get('/', (req, res) => {
        res.send('Você está na rota onde será listado os comentários utilizando GET')
        console.log('Lista comentários - GET')
    });

    app.post('/salvarcomentario', (req, res) => {
        res.send('Você está na rota "salvarcomentario" utilizando  POST')
        console.log('Salvarcomentario - POST')
    });

    app.get('/ouvircomentario', (req, res) => {
        res.send('Você está na rota "ouvircomentario" utilizando GET')
        console.log('Ouvircomentario - GET')
    });

}