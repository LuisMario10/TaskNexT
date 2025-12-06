import { useState } from "react";

interface IInputAddProps {
    onAdd(): void;
    
}

export const InputAdd = ({ onAdd }: IInputAddProps) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        onAdd();
        setValue('');
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Escreva a Tarefa"
                value={ value }
                onChange={ (event) => setValue(event.target.value ) }
            />
            <button onClick={ handleAdd }>
                Adicionar
            </button>
        </div>
    );
}