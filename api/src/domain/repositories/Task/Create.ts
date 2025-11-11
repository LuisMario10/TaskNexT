import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models";

type TCreate = ({ title, body }: Partial<TTaskModel>) => number | bigint;

export const create: TCreate = ({ title, body }) => {
    try {
        if(!title || !body) throw new Error("Titulo ou corpo da tarefa não podem estar vazios");

        const query: string = "INSERT INTO tasks (title, body, is_complete, complete_date) VALUES (?, ?, ?, ?)";

        const dataBaseAction = dataBaseConnection.prepare(query).run(title, body, 0, null);

        return dataBaseAction.lastInsertRowid;

    } catch {
        throw new Error("Erro ao registrar Tarefa");
    }
}