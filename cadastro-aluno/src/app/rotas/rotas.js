const AlunoDao = require('../infra/aluno-dao');
const EnderecoDao = require('../infra/endereco-dao');
const db = require('../../config/database');


module.exports = (app) => {

//Apresenta a lista de alunos cadastrados
app.get('/alunos', function(req, resp) {
    const alunoDao = new AlunoDao(db);

    alunoDao.lista()
        .then(alunos => resp.marko(
            require('../views/alunos/lista/lista.marko'),
        {
                alunos: alunos
        }

        ))
        .catch(erro => console.log(erro));
        
});

//Direciona para o formulario de cadasto do aluno
app.get('/alunos/form', function(req, resp){
    resp.marko(require('../views/alunos/form/form.marko'), {aluno: {} });
});

//Busca pelo ID do aluno
app.get('/alunos/form/:id', function(req, resp) {
    const id = req.params.id;
    const alunoDao = new AlunoDao(db);

    alunoDao.buscaPorId(id)
        .then(aluno => 
            resp.marko(
                require('../views/alunos/form/form.marko'),
                { aluno: aluno }
            )
        )
        .catch(erro => console.log(erro));

});

//Adiciona aluno
app.post('/alunos', function(req, resp){
    console.log(req.body);
    const alunoDao = new AlunoDao(db);

    alunoDao.adiciona(req.body)
        .then(resp.redirect('/alunos'))
        .catch(erro => console.log(erro));  

});


//Altera dados do aluno
app.put('/alunos', function(req, resp){
    console.log(req.body);
    const alunoDao = new AlunoDao(db);

    alunoDao.atualiza(req.body)
        .then(resp.redirect('/alunos'))
        .catch(erro => console.log(erro));  

});

//Exclui cadastro de aluno
app.delete('/alunos/:id', function(req, resp){
    const id = req.params.id;
    const alunoDao = new AlunoDao(db);
    alunoDao.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));

});

//Direciona para o formulario de cadasto do endereço
app.get('/endereco', function(req, resp){
    resp.marko(require('../views/alunos/form/form-end.marko'), {endereco: {} });
});

//Apresentar a lista de endereços cadastrados
app.get('alunos/endereco', function(req, resp) {
    const enderecoDao = new EnderecoDao(db);

    enderecoDao.listaEnd()
        .then(enderecos => resp.marko(
            require('../views/alunos/lista/lista-end.marko'),
        {
                enderecos: enderecos
        }

        ))
        .catch(erro => console.log(erro));
        
});



//Busca pelo ID do endereco
app.get('/endereco/form-end/:id', function(req, resp) {
    const id = req.params.id;
    const enderecoDao = new EnderecoDao(db);

    enderecoDao.buscaPorId(id)
        .then(endereco => 
            resp.marko(
                require('../views/alunos/form/form-end.marko'),
                { endereco: endereco }
            )
        )
        .catch(erro => console.log(erro));

});

//Adicionar endereço//
app.post('endereco', function(req, resp){
    console.log(req.body);
    const enderecoDao = new EnderecoDao(db);

    enderecoDao.adiciona(req.body)
        .then(resp.redirect('/endereco'))
        .catch(erro => console.log(erro));  

});

}