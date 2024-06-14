import { Request, Response } from "express";
import { supabase } from '../database/supabase';
import { GameType } from '../@types/@game';

import { ScrapperRepository } from "../repository/ScrapperRepository";

export class GameController {
    
    static async insertGames(req: Request, res: Response){
        //recupera todos os resultados
        try {
            const { data: games } = await supabase.from('games').select("*")
            res.status(200).json({ games: games })
        } catch(error){
            console.error(error)
            throw error
        } 
    }

    static async show(req: Request, res: Response){
        //recupera apenas um resultado
        try {
            const data = await ScrapperRepository.findAnnouncedGames()
            res.status(200).json(data)
        }catch(error){
            console.error(error)
            throw error
        }
    
    }

    static async saveAnnouncedGames(req: Request, res: Response){

        try {
            const { range } = req.body as { range: string }
    
            const games = await ScrapperRepository.insertByRange(range)

            // const { data: createdGame } = await supabase.from('games').insert([{
            //     name,
            //     release
            // }]).select()
    
            res.status(201).json({ game: games ? games : null  })
        } catch(error){
            console.error(error)
            throw error
        }
    }
}