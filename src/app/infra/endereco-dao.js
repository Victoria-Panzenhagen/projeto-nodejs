class EnderecoDao{
    constructor(db) {
        this._db = db;
    }


    adiciona(endereco){
        return new Promise((resolve, reject) => {
            this._db.run(`INSERT INTO enderecos (rua, num, compl, bairro ) values (?, ?, ?, ? )
            `,
            [   
                endereco.rua,
                endereco.num,
                endereco.compl,
                endereco.bairro,
               
            ],
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o endereco!');
                }

                resolve();
            }
            )
        });
    }


    listaEnd() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM enderecos',
                 (erro, resultados) => {
                    if (erro) return reject ('Não foi possível listar os endereços!');
                    
                    return resolve(resultados);
                }                   
                     
            )
        });      

    }





    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM enderecos
                    WHERE id = ?
                `,
                [id],
                (erro, endereco) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o endereco!');
                    }
                    return resolve(endereco);
                }
            );
        });
    }

    atualiza(endereco) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE enderecos SET
                rua = ?,
                num = ?,
                compl = ?,
                bairro = ?,
                WHERE id = ?
            `,
            [
                endereco.rua,
                endereco.num,
                endereco.compl,
                endereco.bairro,
                endereco.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o endereço!');
                }

                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE 
                    FROM enderecos
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o endereço!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = EnderecoDao;