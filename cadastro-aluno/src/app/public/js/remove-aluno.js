let tabelaAlunos = document.querySelector('#alunos');
tabelaAlunos.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let alunoId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/alunos/${alunoId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#aluno_${alunoId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));

    }
    
});