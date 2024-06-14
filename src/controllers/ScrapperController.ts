import { Request, Response } from "express";
import { ScrapperRepository } from "../repository/ScrapperRepository";

export class ScrapperController {
    
    static async insertGames(req: Request, res: Response){
        try {
            const { range } = req.body as { range: string }
    
            const addedGames = await ScrapperRepository.insertByRange(range)
    
            res.status(201).json({ addedGames: addedGames ? addedGames : null  })
        } catch(error){
            res.status(400).json({message: 'erro ao inserir jogos' })
        }
    }

    static async findAnnouncedGames(req: Request, res: Response){
        try {
            const message = await ScrapperRepository.findAnnouncedGames()
            res.status(200).json(message)
        }catch(error){
            res.status(400).json({message: 'erro ao inserir salvar jogos anunciados' })
        }
    }
}