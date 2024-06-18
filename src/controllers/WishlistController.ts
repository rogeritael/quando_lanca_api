import { Request, Response } from "express";
import { supabase } from '../database/supabase';
import { WishlistRepository } from "../repository/WishlistRepository";

    export class WishlistController {
        
        static async index(req: Request, res: Response){
            try {
                //recupera todos os resultados
            } catch(error){
                console.error(error)
                throw error
            } 
        }

        static async show(req: Request, res: Response){
            try {
                //recupera apenas um resultado (serach)
            } catch(error){
                console.error(error)
                throw error
            }
        }

        static async store(req: Request, res: Response){
            try {
                const { userId, gameId } = req.body
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
                const { userId, gameId } = req.body

                await WishlistRepository.removeFromWishlist(userId, gameId)
                res.status(200).json({ message: 'Jogo removido da wishlist' })

            }catch(error){
                res.status(400).json({ message: 'Erro ao remover jogo da wishlist' })
            }

        }
    }