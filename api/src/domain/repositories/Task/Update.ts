import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models";

type TUpdateTask = ({ id, title, body, isComplete, completeDate }: TTaskModel) => void;

export const updateTask: TUpdateTask = ({ id, title, body, isComplete, completeDate }) => {
    try {
        const query: string = "UPDATE tasks WHERE id = ? SET title = ?, body = ?, is_complete = ?, complete_date = ?";

        dataBaseConnection.prepare(query).run(id, title, body, isComplete, completeDate);

    } catch {
        return Error("Erro ao atualizar registro de Tarefa");
    }
}