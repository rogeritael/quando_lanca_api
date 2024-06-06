import { Request, Response } from "express";
import { supabase } from '../database/supabase';
import { GameType } from '../@types/@game';

export class GameController {
    
    static async index(req: Request, res: Response){
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
    }

    static async store(req: Request, res: Response){
        //armazena um dado
        try {
            const { name, release } = req.body as GameType
    
            const { data: createdGame } = await supabase.from('games').insert([{
                name,
                release
            }]).select()
    
            res.status(201).json({ game: createdGame? createdGame[0] : null  })
        } catch(error){
            console.error(error)
            throw error
        }
    }
}