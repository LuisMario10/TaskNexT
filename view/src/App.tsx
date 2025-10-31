import { useState } from "react"

export default function App() {
  const [value, setValue] = useState('');

  const [tasks, setTasks] = useState([
    { id: 1, body: "Task 1", isComplete: false },
    { id: 2, body: "Task 2", isComplete: false },
    { id: 3, body: "Task 3", isComplete: false }
  ]);

  return (
    <div className="flex bg-slate-500">
      <div className="">
        <input 
          type="text" 
          placeholder="Escreva a Tarefa"
          value={ value }
          onChange={ 
            (event) => setValue(event.target.value )
          }
        />
        <button 
          onClick={ 
            () => {
              setTasks([...tasks, { id: tasks.length + 1, body: value, isComplete: false }])
              setValue('')
            }
        }>
          Adicionar
        </button>
      </div>
      <ol>
        {
          tasks.map((task) => 
            <li key={ task.id } className="flex justify-center bg-violet-600 text-black">
              { task.body }

              <br />

              { task.isComplete ?  "Concluido" : "" }
              
              <button onClick={ 
                () => 
                  setTasks([
                    ...tasks.map((item) => 
                      ({ ...item, isComplete: item.id === task.id ? true : item.isComplete }))
                  ])
              }>
                concluir
              </button>

              <button onClick={ () => setTasks([...tasks.filter(item => item.id !== task.id)]) }>
                remover
              </button>
              <br />
            </li>
            
          )
        }
      </ol>
    </div>
  )
}
