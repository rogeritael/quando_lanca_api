import express from "express";
import { WishlistController } from "../controllers/WishlistController";

const routes = express.Router()

// routes.get('/:userId', WishlistController.addToWishlist)
routes.post('/add', WishlistController.store)
routes.delete('/remove', WishlistController.delete)

export { routes as WishlistRoutes }