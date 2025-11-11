import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models";

type TDelete = (task: Partial<TTaskModel>) => void;

export const deleteTask: TDelete = ({ id }) => {
    try {
        if(!id) throw new Error("Identificados (ID) não pode ser vazio");

        const query: string = "DELETE FROM tasks WHERE id = ?";

        const result = dataBaseConnection.prepare(query).run(id);

        return result.changes

    } catch {
        throw new Error("Erro ao deletar registro da Tarefa");
    }
}