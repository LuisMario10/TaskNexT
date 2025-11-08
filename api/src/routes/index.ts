import { Router } from "express";
import { TaskController } from "../controllers";

export const router: Router = Router();

router.post("/task", TaskController.post);
router.get("/task", TaskController.getAll);
router.get("/task/:id", TaskController.getByID);
router.put("/task/:id", TaskController.put);
router.delete("/task/:id", TaskController.deleteByID);