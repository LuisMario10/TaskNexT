import { dataBaseConnection } from "../../../database";

type TFindAll = () => unknown;

export const findAll: TFindAll = () => {
    try {
        const query: string = "SELECT title, body, is_complete, complete_date FROM tasks";

        const allTasks = dataBaseConnection.prepare(query).get();

        return allTasks;
    } catch {
        return Error("Erro ao retornar dados das tarefas");
    }
}