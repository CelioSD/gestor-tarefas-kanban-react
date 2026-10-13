import { useState } from "react";
import type { Tarefa, PrioridadeTarefa, EstadoTarefa } from "../types/Tarefa";


// Definição das propriedades do componente CardTarefa
interface CardTarefaProps {
    tarefa: Tarefa;
    editarTarefa: (id: number, novoTitulo: string, novaDescricao: string, novaPrioridade: PrioridadeTarefa, novoEstado: EstadoTarefa) => void;
    removerTarefa: (id: number) => void;
    alterarEstadoTarefa: (id: number, novoEstado: EstadoTarefa) => void;

    
}

// Componente CardTarefa para exibir e editar uma tarefa
function CardTarefa({ tarefa, editarTarefa, removerTarefa}: CardTarefaProps){
    const [editando, setEditando] = useState(false);
    const [novoTitulo, setNovoTitulo] = useState(tarefa.titulo);
    const [novaDescricao, setNovaDescricao] = useState(tarefa.descricao)
    
    const [novaPrioridade, setNovaPrioridade] = useState(tarefa.prioridade);
    
    const [novoEstado, setNovoEstado] = useState(tarefa.estado)
    
    const [erroTituloEdicao, setErroTituloEdicao] = useState('');
    const [erroDescricaoEdicao, setErroDescricaoEdicao] = useState('');
    


    return (
        <div>
            {
            editando ? (
                <div className="card-tarefa">
                    {/* Edição do título */}
                    <input type="text" 
                    value={novoTitulo} 
                    onChange={(event) => {
                        setNovoTitulo(event.target.value);
                        if(event.target.value.trim() !== ''){
                            setErroTituloEdicao('')
                        }
                    
                    }}
                    />
                    {erroTituloEdicao && <p className="erro">{erroTituloEdicao}</p>}

                    {/* Edição da descrição  */}

                    <input type="text" value={novaDescricao}
                    onChange={(event) => {
                        setNovaDescricao(event.target.value)
                        if(event.target.value.trim() !== ''){
                            setErroDescricaoEdicao('')
                        }
                    }}/>
                    {erroDescricaoEdicao && <p className="erro">{erroDescricaoEdicao}</p>}


                    {/* Edição das prioridades  */}

                    <select 
                    value={novaPrioridade}
                    onChange={(event) => setNovaPrioridade(event.target.value as PrioridadeTarefa)}
                    >
                        <option value={"Baixa"}>Baixa</option>
                        <option value={"Média"}>Média</option>
                        <option value={"Alta"}>Alta</option>

                    </select>

                    {/* Edição dos Estados  */}
                    <select value={novoEstado} onChange={(event) => setNovoEstado(event.target.value as EstadoTarefa)}
                    >
                        <option value="Por Fazer">Por Fazer</option>
                        <option value="Em Progresso">Em Progresso</option>
                        <option value="Concluída">Concluída</option>
                    </select>

                    <button 
                        className="btn"
                        onClick={()=> {
                            
                            if(novoTitulo.trim() === ''){
                            setErroTituloEdicao('O título é obrigatório');
                                return;
                            }
                            
                            if(novaDescricao.trim() === ''){
                                setErroDescricaoEdicao('A descrição é obrigatória')
                                    return;
                            }
                            editarTarefa(tarefa.id, novoTitulo, novaDescricao, novaPrioridade, novoEstado);

                            setEditando(false)}}
                    >Concluir</button>
                </div>
            ): (
                <div 
                    className="card-tarefa"
                    draggable
                    onDragStart={(event) => {
                        event.dataTransfer.setData(
                        "text/plain",
                        tarefa.id.toString()
                        );
                    }}

                >

                    <h3>{tarefa.titulo}</h3>
                    <p>{tarefa.descricao}</p>
                    <p>Prioridade: {tarefa.prioridade}</p>
                    <p>Estado: {tarefa.estado}</p>
                    <button 
                        className="btn"
                        onClick={() => {
                            setNovoTitulo(tarefa.titulo);
                            setNovaDescricao(tarefa.descricao);
                            setNovaPrioridade(tarefa.prioridade);
                            setNovoEstado(tarefa.estado);
                            setErroTituloEdicao('');
                            setErroDescricaoEdicao('');
                            setEditando(true)
                        }}>
                        Editar
                    </button>
                    <button 
                        className="btn btn-Remover"
                        onClick={()=> removerTarefa(tarefa.id)}>
                        Remover
                    </button>
                </div>

            )}

        </div>
    );
}

export default CardTarefa;

