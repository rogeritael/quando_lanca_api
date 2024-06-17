import { supabase } from '../database/supabase';

export class GameRepository {
    static async findAll(){
        const { data: games } = await supabase.from('games').select("*")
        // paginação
        // const { data: games } = await supabase.from('games').select("*").range(2, 7);
        
        return games
    }

    static async search(term: string){
        const gameById = await this.findById(term)
        const gameByName = await this.findByName(term)

        if(gameById !== null){
            return gameById
        }else if(gameByName !== null){
            return gameByName
        }else{
            throw new Error
        }
    }

    static async findById(id: string){
        const { data: game } = await supabase.from('games').select("*").eq('id', id)
        if(game == null){
            return null
        }
        
        return game
    }

    static async findByName(term: string){
        const { data: game, error } = await supabase
        .from('games')
        .select("*")
        .ilike('name', `%${term.replaceAll('-', ' ')}%`); // ilike para case-insensitive e % para busca parcial

        if (error) {
            console.error('Erro ao buscar jogo:', error);
            return null;
        }

        if (game.length === 0) {
            return null;
        }

        return game;
    }
}