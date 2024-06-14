import { Request, Response } from "express";
import { GameRepository } from "../repository/GameRepository";

export class GameController {
    static async index(req: Request, res: Response){
        try {
            const games = await GameRepository.findAll()
            res.status(200).json(games)
        }catch(error){
            res.status(400).json('Erro ao recuperar jogos')
        }
    }

    static async show(req: Request, res: Response){
        try {
            const { id } = req.params

            const game = await GameRepository.findById(id)
            
            res.status(200).json(game)
        }catch(error){
            res.status(400).json('Não foi possível recuperar o jogo')
        }
    }
}