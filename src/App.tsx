import { useState, useEffect } from "react"
import FormularioTarefa from "./components/FormularioTarefas"
import ListaTarefas from "./components/ListaTarefas";
import type { Tarefa , PrioridadeTarefa, EstadoTarefa } from "./types/Tarefa";


// Componente principal App que gerencia o estado das tarefas e renderiza os componentes de formulário e lista de tarefas
function App(){

  // Estado das tarefas, inicializado a partir do localStorage ou como uma lista vazia
  const [tarefas, setTarefas] = useState<Tarefa[]>(() => {

    try{
    const tarefasGuardadas = localStorage.getItem("tarefas-react");
    
    return tarefasGuardadas

      ?  JSON.parse(tarefasGuardadas)
      : []
    }catch{
      return []
    }
  });


  // Efeito colateral para salvar as tarefas no localStorage sempre que o estado das tarefas mudar
  useEffect(()=>{
    localStorage.setItem("tarefas-react", JSON.stringify(tarefas));
  }, [tarefas]);
  
  // Estado para armazenar o valor da pesquisa e filtrar as tarefas com base no título
  const [pesquisa, setPesquisa] = useState('');
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    return tarefa.titulo
    .toLowerCase()
    .includes(pesquisa.toLowerCase())
  })


  // Função para adicionar tarefas 
  function adicionarTarefa(tarefa:Tarefa){
    setTarefas((tarefasAtuais)=>[...tarefasAtuais, tarefa]);
  }


  // Função para editar tarefas
  function editarTarefa(id: number, novoTitulo: string, novaDescricao: string, novaPrioridade: PrioridadeTarefa, novoEstado: EstadoTarefa){
    setTarefas((tarefasAtuais)=> {
      return tarefasAtuais.map((tarefa)=> {
        if(tarefa.id === id){
          return {...tarefa, 
            titulo: novoTitulo, 
            descricao: novaDescricao,
            prioridade: novaPrioridade,
            estado: novoEstado
          };
        }
        return tarefa;
      })
    })
  }

  // Apagar tarefas 
  function removerTarefa(id: number){
    setTarefas((tarefasAtuais) => {
      return tarefasAtuais.filter((tarefa)=>{
        return tarefa.id !== id
      })
    })
  }


  // Alterar o estado de uma tarefa
  function alterarEstadoTarefa(id: number, novoEstado: EstadoTarefa){
    setTarefas((tarefasAtuais) => {
      return tarefasAtuais.map((tarefa) =>{
          if(tarefa.id === id){
            return {...tarefa,
            estado: novoEstado
            }
          } 
          return tarefa
      });
    });
  }

  return(
    <div>
      <h1>Gestão de tarefas</h1>
  
      <FormularioTarefa adicionarTarefa={adicionarTarefa}/>

      <input 
        className="pesquisa"
        type="text"
        value={pesquisa}
        onChange={(event) => setPesquisa(event.target.value)}
        placeholder="Pesquisar tarefa..."
      />
      <ListaTarefas 
      tarefas={tarefasFiltradas} 
      editarTarefa={editarTarefa}
      removerTarefa = {removerTarefa}
      alterarEstadoTarefa = {alterarEstadoTarefa}
      />
    </div>
  )
}
export default App


