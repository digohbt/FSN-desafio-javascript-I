// Base a ser utilizada
const alunosDaEscola = [{ nome: "Henrique", notas: [], cursos: [], faltas: 5 }, { nome: "Edson", notas: [], cursos: [], faltas: 2 }, { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 }, { nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 }, { nome: "Carlos", notas: [], cursos: [], faltas: 0 }, { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }];


// implementação
function adicionarAluno(nome, notas, cursos, faltas) {
    let aluno = {
        nome: nome,
        notas: notas,
        cursos: cursos,
        faltas: faltas,
    }
    return alunosDaEscola.push(aluno)
}

function listarAlunos(array) {

    for (let valor of alunosDaEscola) {
        console.log(`---------Aluno$---------------`)
        console.log(`Nome do aluno : ${valor.nome}`)
        console.log(`Está no curso : ${valor.cursos}`)
        console.log(`Faltas________: ${valor.faltas} `)
        console.log(`Notas bimestre: ${valor.notas}`)
        console.log("----------Proximo-------------")
    }
}

function buscarAluno(nome) {
    
   let resultadoBusca = alunosDaEscola.filter((valor) => {  return valor.nome == nome })
   

    if (resultadoBusca.length >= 0) {
        console.log("aluno consta na lista ")
    }else {
        console.log("nao consta")
    } 
    console.log(resultadoBusca[0])
    return resultadoBusca 
}

function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no 
    sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
     let alunoCadastrado =  buscarAluno(aluno)
    //  let matricularAluno =  buscarAluno(aluno)
    //     if( matricularAluno == aluno){
    //         console.log("deu certo ")
    //     }else {
            console.log("deu errado "+ alunoCadastrado)
    //     }
    


  }
//    matricularAluno("Edson")

//   adicionarAluno("diego",[10,9,4,3], "fullStack", 0)
//     listarAlunos(alunosDaEscola)
  buscarAluno("ddddd")
