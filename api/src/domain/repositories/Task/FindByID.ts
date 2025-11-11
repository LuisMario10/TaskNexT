import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models"

type TFindByID = ({ id }: Partial<TTaskModel>) => unknown;

export const findByID: TFindByID = ({ id }) => {
    try {
        if(!id) throw new Error("Identificados (ID) não pode ser vazio");

        const query: string = "SELECT * FROM tasks WHERE id = ?";

        const task = dataBaseConnection.prepare(query).get(id);

        return task;

    } catch {
        throw new Error("Erro ao retornar Tarefa de ID fornecido");
    }
}   