import { Request, Response } from "express";
import { TParamsProps } from "../@types";
import { StatusCodes } from "http-status-codes";
import { TaskRepository, TTaskModel } from "../../domain";
import { Validator } from "../../shared";

export const getByID = (request: Request<TParamsProps>, response: Response) => {
    request.params.id = Number(request.params.id);

    const { id } = Validator.paramsPropsValidator.parse(request.params);

    const idForSearch: Partial<TTaskModel> = { id: id };

    try {
        return response.status(StatusCodes.OK).json({
            statusCodes: StatusCodes.OK,
            msg: "Resgatado registro da Tafera",
            data: TaskRepository.findByID(idForSearch)
            
        })
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno no servidor"
        })
    }
}