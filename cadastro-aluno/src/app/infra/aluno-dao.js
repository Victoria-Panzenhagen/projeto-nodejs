class AlunoDao{
    constructor(db) {
        this._db = db;
    }


    adiciona(aluno){
        return new Promise((resolve, reject) => {
            this._db.run(`INSERT INTO alunos (nome, data_nasc, cpf, nota) values (?, ?, ?, ?)
            `,
            [   
                aluno.nome,
                aluno.data_nasc,
                aluno.cpf,
                aluno.nota
            ],
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o aluno!');
                }

                resolve();
            }
            )
        });
    }


    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM alunos',
                 (erro, resultados) => {
                    if (erro) return reject ('Não foi possível listar os alunos');
                    
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
                    FROM alunos
                    WHERE id = ?
                `,
                [id],
                (erro, aluno) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o aluno!');
                    }
                    return resolve(aluno);
                }
            );
        });
    }

    atualiza(aluno) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE alunos SET
                nome = ?,
                data_nasc = ?,
                cpf = ?,
                nota = ?
                WHERE id = ?
            `,
            [
                aluno.nome,
                aluno.data_nasc,
                aluno.cpf,
                aluno.nota,
                aluno.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o aluno!');
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
                    FROM alunos
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o aluno!');
                    }
                    return resolve();
                }
            );
        });
    }

    media(){
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT AVG(nota) from alunos
                `,
                (erro, resultados) => {
                    if (erro) {
                        return reject('Não foi possível verificar a media!');
                    }
                    return resolve(resultados);
                }
            );
        });
    }    
}

module.exports = AlunoDao;