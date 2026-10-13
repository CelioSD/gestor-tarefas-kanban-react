
import ColunaTarefas from "./ColunaTarefas";
import type { Tarefa, PrioridadeTarefa, EstadoTarefa } from "../types/Tarefa";


// Definição das propriedades do componente ListaTarefas
interface ListaTarefasProps{
    tarefas: Tarefa[];
    editarTarefa: (id: number, novoTitulo:string, novaDescricao: string, novaPrioridade: PrioridadeTarefa, novoEstado: EstadoTarefa)=> void;
    removerTarefa:(id:number) => void;
    alterarEstadoTarefa: (id: number, novoEstado: EstadoTarefa) => void;
}

// Componente ListaTarefas para exibir a lista de tarefas em colunas
function ListaTarefas({
    tarefas,
    editarTarefa,
    removerTarefa,
    alterarEstadoTarefa
    }: ListaTarefasProps){
    

    const tarefasPorFazer = tarefas.filter(
        (tarefa) => tarefa.estado === 'Por Fazer'
    );

    const tarefasEmProgresso = tarefas.filter(
        (tarefa) => tarefa.estado === 'Em Progresso'
    );

    const tarefasConcluidas = tarefas.filter(
        (tarefa) => tarefa.estado === 'Concluída'
    );

    return(
        <div className="kanban">
            <ColunaTarefas
                titulo="Por Fazer"
                tarefas={tarefasPorFazer}
                editarTarefa={editarTarefa}
                removerTarefa = {removerTarefa}
                alterarEstadoTarefa = {alterarEstadoTarefa}
            />

            <ColunaTarefas 
                titulo="Em Progresso"
                tarefas = {tarefasEmProgresso}
                editarTarefa={editarTarefa}
                removerTarefa = {removerTarefa}
                alterarEstadoTarefa = {alterarEstadoTarefa}
            />

            <ColunaTarefas
                titulo = "Concluída"
                tarefas={tarefasConcluidas}
                editarTarefa={editarTarefa}
                removerTarefa = {removerTarefa}
                alterarEstadoTarefa = {alterarEstadoTarefa}
            />

        </div>
            
   
    );

}

export default ListaTarefas;

