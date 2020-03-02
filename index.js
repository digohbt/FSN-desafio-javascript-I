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

    let resultadoBusca = alunosDaEscola.filter((valor) => { return valor.nome == nome })
    if (resultadoBusca.length > 0) {
        console.log("aluno consta na lista ")
    } else {
        console.log("nao consta")
    }
    //  console.log(resultadoBusca[0])
    return resultadoBusca
}

function matricularAluno(aluno, curso) {

    let alunoCadastrado = buscarAluno(aluno)
    // console.log(alunoCadastrado)

    if (alunoCadastrado.length > 0) {
        alunoCadastrado[0].cursos = curso
        alunoCadastrado[0].dataMatricula = new  Date()
    console.log( `Curso Adicionado : 

                  nome: ${alunoCadastrado[0].nome}
                  Curso: ${alunoCadastrado[0].cursos}
                  Data: ${alunoCadastrado[0].dataMatricula}
                  faltas: ${alunoCadastrado[0].falta }
                  notas: ${alunoCadastrado[0].notas}`)
                  
            // tentativa para saber o indice para fazer slice no array alunosDaEscola
        let indice = alunosDaEscola.indexOf(function () {
            for (let prop of alunosDaEscola) {
                if (prop[prop].nome === aluno) {
                    return false;
                } else {
                    return false
                }
            }
        })
 // console.log(indice)
      } else {
        console.log("O aluno nao esta matriculado na Escola ")
    } }



    function aplicarNota(aluno , falta){
      let alunoCadastrado = buscarAluno(aluno)
    
    if (alunoCadastrado.length > 0) {
        
        alunoCadastrado[0].faltas  = (alunoCadastrado[0].faltas + falta)
    console.log( `Faltas Adicionado : 
                  nome: ${alunoCadastrado[0].nome}
                  Curso: ${alunoCadastrado[0].cursos}
                  Data: ${alunoCadastrado[0].dataMatricula}
                  faltas: ${alunoCadastrado[0].faltas }
                  notas: ${alunoCadastrado[0].notas}`) 
      } else {
        console.log("O aluno nao esta matriculado na Escola ")
    } }






 matricularAluno("Edson", "DS")
aplicarNota("Edson" , 8)

//   adicionarAluno("diego",[10,9,4,3], "fullStack", 0)
//     listarAlunos(alunosDaEscola)
//  buscarAluno("Henriq")
