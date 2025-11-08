import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TBodyProps, TParamsProps } from "../@types";
import { TaskRepository, TTaskModel } from "../../domain";
import { Validator } from "../../shared";

export const put = (request: Request<TParamsProps, {}, TBodyProps>, response: Response) => {

    const { id } = Validator.paramsPropsValidator.parse(request.params.id);

    const { title, body, isComplete, completeDate } = Validator.bodyPropsValidator.parse(request.body);

    const dataTask: TTaskModel = {
        id: id,
        title: title,
        body: body,
        isComplete: isComplete,
        completeDate: completeDate
    }

    try {
        return response.status(StatusCodes.OK).json({ 
            statusCode: StatusCodes.OK,
            msg: "Registros das Tarefas retornado", 
            datas: TaskRepository.updateTask(dataTask)
        });

    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR, 
            msg: "Erro ao coletar dados dos registros "
        });
    }
}