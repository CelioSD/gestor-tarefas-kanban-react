import { useState } from "react"
import type { Tarefa, PrioridadeTarefa, EstadoTarefa } from "../types/Tarefa"

// Definição das propriedades do componente FormularioTarefa
interface FormularioTarefaProps {
    adicionarTarefa: (tarefa: Tarefa) => void;
}

// Componente FormularioTarefa para criar uma nova tarefa
function FormularioTarefa(props: FormularioTarefaProps){
    const [erroTitulo, setErroTitulo] = useState('');
    const [erroDescricao, setErroDescricao] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [prioridade, setPrioridade] = useState<PrioridadeTarefa>('Baixa');
    const [estado, setEstado] = useState<EstadoTarefa>('Por Fazer');

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();

        const tarefa = {
            id: Date.now(),
            titulo,
            descricao,
            prioridade,
            estado
        };

        if(titulo.trim() === ''){
            setErroTitulo('O título é obrigatório');
            return;
        }
        
        if(descricao.trim() === ''){
            setErroDescricao('A descrição é obrigatória');
            return;
        }
        
        

        props.adicionarTarefa(tarefa);
        setTitulo('');
        setDescricao('');
        setPrioridade('Baixa');
        setEstado('Por Fazer');
        setErroTitulo('');
        setErroDescricao('');
    }
    
    return(
        <form 
        className="formulario-tarefas"
        onSubmit={handleSubmit}>



            <input type="text" placeholder="Título" value={titulo} onChange={(event) => {
                setTitulo(event.target.value);
                if(event.target.value.trim() !== ''){
                    setErroTitulo('');
                }
            }}/>
            {/* verificação de erro na tarefa*/}
            {erroTitulo && <p className="erro">{erroTitulo}</p>}


            <textarea  placeholder="Descricao" value={descricao} onChange={(event) => {
                setDescricao(event.target.value);
                if(event.target.value.trim() !== ''){
                    setErroDescricao('');
                }
            }} />
            {/* verificação de erro na tarefa*/}
            {erroDescricao && <p className="erro">{erroDescricao}</p>}
                



            <select value={prioridade}  onChange={(event) => setPrioridade(event.target.value as PrioridadeTarefa)} >
                <option value="Baixa">Baixa</option>
                <option value="Media">Média</option>
                <option value="Alta">Alta</option>
            </select>

            <select value={estado} onChange={(event) => setEstado(event.target.value as EstadoTarefa)}>
                <option value="Por Fazer">Por Fazer</option>
                <option value="Em Progresso">Em Progresso</option>
                <option value="Concluída">Concluída</option>
            </select>

            <button type="submit" className="btn">
                Criar tarefa
            </button>
        </form>
    )
}

export default FormularioTarefa