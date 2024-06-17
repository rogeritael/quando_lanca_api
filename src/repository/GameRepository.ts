import { supabase } from '../database/supabase';

type findAllTypes = {
    page?: number
    minified?: boolean
}

export class GameRepository {
    static async findAll({ page, minified }: findAllTypes){ //10 -> 50
        if(page && page != 0){
            const pageSize = 10; // Número de jogos por página
            const start = (page - 1) * pageSize; // Índice inicial
            const end = start + pageSize - 1; // Índice final
            const { data: games } = minified ? await supabase.from('games').select("name, release").range(start, end) : await supabase.from('games').select("*").range(start, end)
            games && console.log(games.length)
            return games
        }

        const { data: games } = minified ? await supabase.from('games').select("name, release") : await supabase.from('games').select("*")
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