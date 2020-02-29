// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome, notas,cursos,faltas){
  
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido
corretamente.*/
    let aluno = {
        nome:nome,
        notas:notas,
        cursos:cursos,
        faltas:faltas,

    }
     return alunosDaEscola.push(aluno)   
}
     
       

    
  function listarAlunos(array){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    for (let valor of alunosDaEscola)  {
    
    
    console.log(`---------Aluno$---------------`)
    console.log(`Nome do aluno : ${valor.nome}`)
    console.log(`Está no curso : ${valor.cursos}`)
    console.log(`Faltas________: ${valor.faltas} `)
    console.log(`Notas bimestre: ${valor.notas}`)
    console.log("----------Proximo-------------")
    }
    }
    adicionarAluno("diego",[10,9,4,3], "fullStack", 0)
    adicionarAluno("diego",[10,9,4,3], "fullStack", 0)
    adicionarAluno("diego",[10,9,4,3], "fullStack", 0)
    adicionarAluno("diego",[10,9,4,3], "fullStack", 0)


    function buscarAluno(nome) {
        /* Por meio dessa função, podemos pesquisar um aluno
         por nome na lista de aluno. Ela deverá exibir um 
         feedback, tanto para quando encontrar o aluno, tanto 
         quando não encontrar. E deverá devolver um aluno em 
         seu retorno. */
                             
                      let resultadoBusca =   alunosDaEscola.filter( (valor)=> valor.nome == nome);
                    
                    if( resultadoBusca.length >= 1) {
                        console.log("aluno consta na lista ")
                    }else {
                        console.log("nao consta")
                    }
                    console.log(resultadoBusca)
                            
                }


      










    //   adicionarAluno("diego",[10,9,4,3], "fullStack", 0)
     listarAlunos(alunosDaEscola)
     buscarAluno("diego")
