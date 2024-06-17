import express from "express";
import { ScrapperController } from "../controllers/ScrapperController";

const routes = express.Router()

routes.get('/:userId', ScrapperController.findAnnouncedGames)
routes.post('/add_to_wishlist', ScrapperController.insertGames)
routes.post('/remove_from_wishlist', ScrapperController.insertGames)

export { routes as UserRoutes }