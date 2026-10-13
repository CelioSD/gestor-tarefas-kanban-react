import { useState } from "react";
import CardTarefa from "./CardTarefa";
import type { Tarefa , PrioridadeTarefa, EstadoTarefa } from "../types/Tarefa";

// Definição das propriedades do componente ColunaTarefas
interface ColunaTarefaProps{
    titulo: string;
    tarefas: Tarefa[];
    editarTarefa: (id: number, novoTitulo: string, novaDescricao: string, novaPrioridade: PrioridadeTarefa, novoEstado: EstadoTarefa)=> void;
    removerTarefa: (id: number) => void;
    alterarEstadoTarefa: (id: number, novoEstado: EstadoTarefa) => void;
}

// Componente ColunaTarefas para exibir uma coluna de tarefas
function ColunaTarefas({ titulo, tarefas, editarTarefa, removerTarefa, alterarEstadoTarefa }: ColunaTarefaProps){
    const [dragOver, setDragOver] = useState(false);
    return (
        <div className="coluna"
        
        onDragLeave={() => setDragOver(false)}
        onDrop={(event)=>{
            event.preventDefault();
            const id= Number( event.dataTransfer.getData("text/plain")
        );

                let novoEstado : EstadoTarefa;
                if (titulo === "Por Fazer") {
                    novoEstado = "Por Fazer";
                } else if (titulo === "Em Progresso") {
                    novoEstado = "Em Progresso";
                } else{
                    novoEstado = "Concluída";
                }

                alterarEstadoTarefa(id, novoEstado)
                setDragOver(false)
            }}

            onDragOver={(event)=>{
                event.preventDefault()
                setDragOver(true)
            }}
        
        >
            <h2>{titulo}</h2>

            {tarefas.map((tarefa) => (
                <CardTarefa
                key={tarefa.id}
                tarefa={tarefa}
                editarTarefa={editarTarefa}
                removerTarefa = {removerTarefa}
                alterarEstadoTarefa = {alterarEstadoTarefa}

                
                />
            ))}
            {dragOver && (
                <div className="drop-placeholder">
                </div>
            )}



        </div>
    )
}


export default ColunaTarefas