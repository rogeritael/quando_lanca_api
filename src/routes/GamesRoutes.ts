import express from "express";
import { GameController } from "../controllers/GameController";

const routes = express.Router()

routes.get('/', GameController.index)
routes.post('/:id', GameController.show)

export { routes as GamesRoutes }