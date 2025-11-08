import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models"

type TFindByID = ({ id }: Partial<TTaskModel>) => unknown;

export const findByID: TFindByID = ({ id }) => {
    try {
        const query: string = "SELECT title, body, is_complete, complete_date FROM tasks";

        const task = dataBaseConnection.prepare(query).get(id);

        return task;

    } catch {
        return Error("Erro ao retornar Tarefa de ID fornecido");
    }
}   