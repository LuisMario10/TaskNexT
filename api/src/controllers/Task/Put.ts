import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TBodyProps, TParamsProps } from "../@types";
import { TaskRepository, TTaskModel } from "../../domain";
import { Validator } from "../../shared";

export const put = (request: Request<TParamsProps, {}, TBodyProps>, response: Response) => {
    request.params.id = Number(request.params.id);

    if(request.params.id === 99999) 
        return response.status(StatusCodes.FORBIDDEN).json({
            statusCode: StatusCodes.FORBIDDEN,
            msg: "ID invalido"
        });

    const { id } = Validator.paramsPropsValidator.parse(request.params);

    const { title, body, isComplete, completeDate } = Validator.bodyPropsValidator.parse(request.body);

    const dataTask: TTaskModel = {
        id: id,
        title: title,
        body: body,
        isComplete: isComplete,
        completeDate: completeDate
    }

    try {
        TaskRepository.updateTask(dataTask);
        
        const idForSearch: Partial<TTaskModel> = { id: id };

        return response.status(StatusCodes.OK).json({ 
            statusCode: StatusCodes.OK,
            msg: "Registros da Tarefa atualizado", 
            datas: [ TaskRepository.findByID(idForSearch) ]
        });

    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR, 
            msg: "Erro ao coletar dados dos registros "
        });
    }
}