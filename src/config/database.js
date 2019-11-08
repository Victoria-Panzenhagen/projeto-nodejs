
//Crianção e inicialização do banco de dados coma tabela alunos e a tabelo enderecos

const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const ALUNOS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL, 
    data_nasc DATE NOT NULL,
    cpf  TEXT NOT NULL,
    nota REAL NOT NULL
   
)
`;

const ENDERECOS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS enderecos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rua TEXT NOTT NULL,
    num TEXT, 
    compl TEXT,
    bairro  TEXT NOT NULL,
    alunoID INTEGER, FOREIGN KEY (alunoID) REFERENCES alunos(id)
   
)
`;

const INSERIR_ALUNO_1 = 
`
INSERT INTO alunos (
    nome,
    data_nasc,
    cpf,
    nota
) SELECT 'Victoria', '14-01-1992', '123456789', 8 WHERE NOT EXISTS (SELECT * FROM alunos WHERE nome = 'Victoria')
`;

const INSERIR_ENDERECO_1 = 
`
INSERT INTO enderecos (rua, num, compl, bairro, alunoID
) SELECT 'Cinco Rios', '101', 'apt 308', 'Cordovil', 1 WHERE NOT EXISTS (SELECT * FROM enderecos WHERE rua = 'Cinco Rios')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(ALUNOS_SCHEMA);
    bd.run(INSERIR_ALUNO_1);
    bd.run(ENDERECOS_SCHEMA);
    bd.run(INSERIR_ENDERECO_1);
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;