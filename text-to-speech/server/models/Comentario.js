const conexao = require('../infraestrutura/conexao');
const TextToSpeech = require('../models/TextToSpeech.js');

class Comentario {

    adiciona(comentario, res) {
        const sql = 'INSERT INTO Comentarios SET ?';
        conexao.query(sql, comentario, (erro, resultado) => {

            let criaAudioId = resultado.insertId;
            let textComentario = comentario;
            let criaAudioComentario = textComentario.comentario;
            
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(comentario);
                TextToSpeech.criaAudio(criaAudioId, criaAudioComentario);
            }
        });
    }

    lista(res) {
        const sql = 'SELECT * FROM Comentarios';

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Comentarios WHERE id=${id}`;
        conexao.query(sql, (erro, resultado) => {
            const comentario = resultado[0];

            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(comentario);
            }
        });
    }

}

module.exports = new Comentario;