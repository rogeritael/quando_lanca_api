import { supabase } from '../database/supabase';

export class GameRepository {
    static async findAll(){
        const { data: games } = await supabase.from('games').select("*")
        return games
    }

    static async findById(id: string){
        const { data: game } = await supabase.from('games').select("*").eq('id', id)
        if(game == null){
            throw new Error
        }
        
        return game
    }

    static async findBySearchTerm(term: string){
        
    }
}