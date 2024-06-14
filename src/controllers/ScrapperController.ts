import { Request, Response } from "express";
import { ScrapperRepository } from "../repository/ScrapperRepository";

export class ScrapperController {
    
    static async insertGames(req: Request, res: Response){
        try {
            const { range } = req.body as { range: string }
    
            const games = await ScrapperRepository.insertByRange(range)
    
            res.status(201).json({ game: games ? games : null  })
        } catch(error){
            res.status(400).json({message: 'erro ao inserir jogos' })
        }
    }

    static async findAnnouncedGames(req: Request, res: Response){
        try {
            const data = await ScrapperRepository.findAnnouncedGames()
            res.status(200).json(data)
        }catch(error){
            res.status(400).json({message: 'erro ao inserir salvar jogos anunciados' })
        }
    }
}