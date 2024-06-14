import express from "express";
import { GameController } from "../controllers/GameController";

const routes = express.Router()

routes.get('/', GameController.index)

export { routes as GamesRoutes }