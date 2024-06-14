import { supabase } from '../database/supabase';

export class GameRepository {
    static async findAll(){
        const { data: games } = await supabase.from('games').select("*")
        return games
    }

    findById(id: string){
        
    }
}