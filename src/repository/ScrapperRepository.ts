import cheerio = require('cheerio');
import { getPageInfo } from '../utils/getPageInfo';
import { supabase } from '../database/supabase';
import { GameList } from '../@types/@gameList';

export class ScrapperRepository {
    static async findAll(){
    // BUSCA A URL DE TODOS OS JOGOS EM LANÇAMENTO
        // recupera o HTML da página
        const data = await getPageInfo('https://www.ign.com/upcoming/games')
    
        // buscando informações na página
        const $ = cheerio.load(data)
        let gameList: GameList[] = []
        let gamesAlreadyAdded = await supabase.from('games').select("*")
        
        $('.figure-tile').map((index, element) => {
            let game_url = $(element).find('.tile-link').attr('href')
            let game_name = $(element).find('.details figcaption').text()
            
            // se o jogo não existir no banco de dados, adicionamos ao gameList
            if(gamesAlreadyAdded.data?.find((game) => game.name === game_name) === undefined){
                gameList = [...gameList, { name: game_name, url: 'https://www.ign.com'+game_url }]
            }
        })
            
        // BUSCA A INFORMAÇÃO DE CADA JOGO NA LISTA DE JOGOS QUE NÃO ESTÃO CADASTRADOS
        for (let index = 0; index < gameList.length; index++) {
            const currentGame = gameList[index]

            const data = await getPageInfo(currentGame.url)
            // buscando informações na página
            const $ = cheerio.load(data)
            
            const name = $('.display-title').text()
            const dev = $('a.Developers').text()
            const image = $('.object-thumbnail figure img').attr('src')
            const release = $('.subtitle time').text()
            const platforms = '*'

            
            console.log({
                name: name, developer: dev, image: image, release: release, platforms: platforms
            })
            //salva o jogo no banco de dados
        }



        return gameList
    }

    static async findByUrl(target: string){
        
    }
}