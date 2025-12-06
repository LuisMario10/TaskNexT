import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TQueryProps } from "../@types";
import { Validator } from "../../shared";
import { TaskRepository } from "../../domain";

// Integrar sistema de paginação

export const getAll = (request: Request<{}, {}, {}, TQueryProps>, response: Response) => {

    const { page, filter, limit } = Validator.queryPropsValidator.parse(request.query);

    response.setHeader('access-control-expose-headers', 'x-total-count');
    response.setHeader('x-total-count', 1);

    try {
        return response.status(StatusCodes.OK).json({ 
            statusCode: StatusCodes.OK,
            msg: "Registros das Tarefas retornado", 
            datas: TaskRepository.findAll()
        });

    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR, 
            msg: "Erro ao coletar dados dos registros "
        });
    }
}