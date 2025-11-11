import { dataBaseConnection } from "../../../database";

type TFindAll = () => unknown;

export const findAll: TFindAll = () => {
    
    try {
        const query: string = "SELECT * FROM tasks";

        const allTasks = dataBaseConnection.prepare(query).all();

        return allTasks;
    } catch {
        throw new Error("Erro ao retornar dados das tarefas");
    }
}