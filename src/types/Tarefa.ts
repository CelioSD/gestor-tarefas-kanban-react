
// Definição dos tipos de estado de uma tarefa
export type EstadoTarefa = "Por Fazer" | "Em Progresso" | "Concluída";

// Definição do tipo de prioridade de uma tarefa
export type PrioridadeTarefa = "Baixa" | "Média" | "Alta";

// Definição da interface Tarefa 
export interface Tarefa{
    id:number;
    titulo:string;
    descricao:string;
    prioridade: PrioridadeTarefa;
    estado: EstadoTarefa;
}

