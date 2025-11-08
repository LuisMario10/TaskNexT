import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models";

type TCreate = ({ title, body }: Partial<TTaskModel>) => number | bigint | Error

export const create: TCreate = ({ title, body }) => {
    try {
        const query: string = "INSERT INTO (title, body, is_complete, complete_date) VALUES (?, ?, ?, ?)";

        const dataBaseAction = dataBaseConnection.prepare(query).run(title, body, false, "");

        return dataBaseAction.lastInsertRowid;

    } catch {
        return Error("Erro ao registrar Tarefa");
    }
}