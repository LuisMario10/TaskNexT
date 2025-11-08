import { dataBaseConnection } from "../../../database";
import { TTaskModel } from "../../models";

type TDelete = ({ id }: TTaskModel) => void;

export const deleteTask: TDelete = ({ id }) => {
    try {
        const query: string = "DELETE tasks WHERE id = ?"

        dataBaseConnection.prepare(query).run(id);

    } catch {
        return Error("Erro ao deletar registro da Tarefa")
    }
}