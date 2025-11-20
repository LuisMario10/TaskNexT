interface ITaskProps{
    id: number;
    title: string;
    body: string;
    isComplete: boolean;
    completeDate: string | null;

    onComplete(): void;
    onRemove(): void;
}   

export const Task = ({ id, title, body, isComplete, completeDate, onComplete, onRemove }: ITaskProps) => {
    return (
        <li key={ id }>
            <h1>{ title }</h1>

            <p>{ body }</p>

            <span>{ isComplete ?  "Concluido" : "" }</span>

            <span>{ isComplete ?  completeDate : "" }</span>
              
            <button onClick={ onComplete }>
                concluir
            </button>

            <button onClick={ onRemove }>
                remover
            </button>
        </li>
    );
}

