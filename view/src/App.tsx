import { useState } from "react"

import { InputAdd, Task } from "./components";

export default function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Title 1", body: "Task 1", isComplete: false, completeDate: null },
    { id: 2, title: "Title 2", body: "Task 2", isComplete: false, completeDate: null },
    { id: 3, title: "Title 3", body: "Task 3", isComplete: false, completeDate: null },
    { id: 4, title: "Title 4", body: "Task 4", isComplete: true, completeDate: "19/11/2025" }
    { id: 5, title: "Title 5", body: "Task 5", isComplete: true, completeDate: "19/11/2025" }
  ]);

  const handleAdd = (title: string, body: string) => 
    setTasks([...tasks, { id: tasks.length + 1, title: title, body: body, isComplete: false, completeDate: null }]);
  

  const handleComplete = (id: number) => 
    setTasks([...tasks.map((item) => ({ ...item, isComplete: item.id === id ? true : item.isComplete }))]);

  const handleRemove = (id: number) => 
    setTasks([...tasks.filter(item => item.id !== id)]);

  return (
    <div>
      <InputAdd onAdd={ () => handleAdd }/>
      <ol>
        {
          tasks.map((task) => 
            <Task 
              id={ task.id }
              title={ task.title }
              body={ task.body }
              isComplete={ task.isComplete }
              completeDate={ task.completeDate }
              onComplete={ () => handleComplete }
              onRemove={ () => handleRemove }
            />
          )
        }
      </ol>
    </div>
  )
}
