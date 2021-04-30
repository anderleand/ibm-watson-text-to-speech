class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criaTabela();
    }

    criaTabela() {
        const sql = 'CREATE TABLE IF NOT EXISTS comentarios (id int NOT NULL AUTO_INCREMENT, comentario varchar(250) NOT NULL, PRIMARY KEY(id))';

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela comentarios criada com sucesso!');
            }
        });
    }
}

module.exports = new Tabelas;