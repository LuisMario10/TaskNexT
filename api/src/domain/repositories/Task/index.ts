import { create } from "./Create";
import { findAll } from "./FindAll";
import { findByID } from "./FindByID";
import { updateTask } from "./Update";
import { deleteTask } from "./Delete";

export const TaskRepository = {
    create,
    findAll,
    findByID,
    updateTask,
    deleteTask
}