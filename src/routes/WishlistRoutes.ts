import express from "express";
import { WishlistController } from "../controllers/WishlistController";

const routes = express.Router()

// routes.get('/:userId', WishlistRepository.addToWishlist)
routes.post('/add', WishlistController.store)
// routes.post('/remove', WishlistRepository.insertGames)

export { routes as WishlistRoutes }