import { Request, Response } from "express";
import { TParamsProps } from "../@types";
import { StatusCodes } from "http-status-codes";
import { TaskRepository, TTaskModel } from "../../domain";
import { Validator } from "../../shared";

export const deleteByID = (request: Request<TParamsProps>, response: Response) => {

    request.params.id = Number(request.params.id);

    if(request.params.id >= 9999999) 
        return response.status(StatusCodes.FORBIDDEN).json({
            statusCode: StatusCodes.FORBIDDEN,
            msg: "ID invalido"
        });

    const { id } = Validator.paramsPropsValidator.parse(request.params)

    const idForDelete: Partial<TTaskModel> = { id: id };

    try {
        TaskRepository.deleteTask(idForDelete);

        return response.status(StatusCodes.NO_CONTENT).json({
            statusCodes: StatusCodes.NO_CONTENT,
            msg: "Tarefa deletada com sucesso",
        });
        
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno do servidor"
        });
    }
}