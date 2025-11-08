import express, { Express } from "express";
import { router } from "./routes";
import cors from "cors";
import "dotenv/config";

const _APP: Express = express();

const _PORT: string | number = process.env.PORT || 2345;

_APP.use(express.json());

_APP.use(cors());

_APP.use(router);

_APP.listen(_PORT, () => {
    console.log(`Servidor HTTP Rodando em => http://localhost:${_PORT}`);
});
