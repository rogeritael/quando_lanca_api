import { Request, Response } from "express";
import { supabase } from '../database/supabase';
import { WishlistRepository } from "../repository/WishlistRepository";

export class WishlistController {
    
    static async index(req: Request, res: Response){
        try {
            const userId = req.user.id

            const wishlist = await WishlistRepository.findAll(userId)
            res.status(200).json(wishlist)
        } catch(error){
            console.error(error)
            throw error
        } 
    }

    static async store(req: Request, res: Response){
        try {
            const { gameId } = req.body
            const userId = req.user.id

            if(!userId || !gameId){
                return res.status(400).json({ message: 'Erro ao adicionar jogo aos favoritos' })
            }

            await WishlistRepository.addToWishlist(userId, gameId)
            res.status(400).json({ message: `jogo adicionado à lista de desejos com sucesso` })
        } catch(error){
            console.error(error)
            throw error
        }
    }

    static async delete(req: Request, res: Response){
        try{
            const { gameId } = req.body
            const userId = req.user.id

            await WishlistRepository.removeFromWishlist(userId, gameId)
            res.status(200).json({ message: 'Jogo removido da wishlist' })

        }catch(error){
            res.status(400).json({ message: 'Erro ao remover jogo da wishlist' })
        }

    }
}