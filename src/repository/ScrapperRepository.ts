import cheerio = require('cheerio');
import { getPageInfo } from '../utils/getPageInfo';

export class ScrapperRepository {
    static async findAll(){
        // BUSCA A URL DE TODOS OS JOGOS EM LANÇAMENTO
        // recupera o HTML da página
        const data = await getPageInfo('https://www.ign.com/upcoming/games')
    
        // buscando informações na página
        const $ = cheerio.load(data)
        let gameList: any = []

        await $('.figure-tile').map((index, element) => {
            let game_url = $(element).find('.tile-link').attr('href')

            game_url &&
                this.findByUrl(game_url)

            gameList = [...gameList, 'https://www.ign.com'+game_url]
        })

        // BUSCA A INFORMAÇÃO DE CADA JOGO NA LISTA SALVA
        gameList.map((url: any) => {
            console.log('jogo: '+url)
        })

        return gameList
    }

    static async findByUrl(target: string){
        
    }
}