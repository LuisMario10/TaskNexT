import { Request, Response } from "express";
import { TaskRepository, TTaskModel } from "../../domain";
import { StatusCodes } from "http-status-codes";
import { TBodyProps } from "../@types";
import { Validator } from "../../shared";

export const post = (request: Request<{}, {}, TBodyProps>, response: Response) => {
    const { title, body } = Validator.bodyPropsValidator.parse(request.body);

    const task: Partial<TTaskModel> = {
        title: title,
        body: body
    }

    const id = TaskRepository.create(task);

    try {
        return response.status(StatusCodes.CREATED).json({
            statusCodes: StatusCodes.CREATED,
            msg: "Tarefa criada com sucesso",
            data: { id: id }
        })
    } catch {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            statusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
            msg: "Erro interno no servidor"
        });
    }
}

