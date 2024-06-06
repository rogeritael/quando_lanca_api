import express from "express";
import { GameController } from "../controllers/GameController";

const routes = express.Router()

routes.get('/find_all', GameController.index)
routes.post('/create', GameController.store)

export { routes as GamesRoutes }