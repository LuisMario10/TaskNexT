import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models";

type TUpdateTask = (task: TTaskModel) => number;

export const updateTask: TUpdateTask = ({ id, title, body, isComplete, completeDate }) => {
    try {
        const query = "UPDATE tasks SET title = ?, body = ?, is_complete = ?, complete_date = ? WHERE id = ?";

        const result = dataBaseConnection.prepare(query).run(title, body, Number(isComplete), completeDate, id);

        console.log("Linhas alteradas:", result.changes);

        return result.changes;
        
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao atualizar registro de Tarefa");
    }
};
