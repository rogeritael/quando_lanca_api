// import { supabase } from "./database/supabase";


// async function findAll(){
//     const { data: games} = await supabase.from('games').select("name")
//     console.log(games)
//     console.log(games!.length)
// }
// // findAll()

// async function findOne(){
//     const { data: games } = await supabase.from('games_to_add').select("*")
//     .eq('name', 'Albatroz');
//     console.log(games)
//     console.log(games!.length)
// }
// findOne()

function searchGameIGDB(term: string){
    const updatedTerm = term.replaceAll(' ', '%20')
    let defaultQuery = 'https://www.igdb.com/search?utf8=%E2%9C%93&q='
    defaultQuery += updatedTerm
    console.log(defaultQuery)

    //entrar no site e pegar o primeiro resultado (apenas de jogos com a data diferente de 'To Be Announced')
        //se não retornar nada, é porque não existe

    //comparar o termo pesquisado com o nome do valor retornado para verificar se é o mesmo

    //recuperar imagem
    //recuperar os videos
}
searchGameIGDB('hogwarts legacy')

// function deleteHistoricalGames() {} -- jogos lançados a mais de 60 dias
// function findTrailers() {} -- busca trailers de jogos no YouTube
//search - pesquisar jogos pelo nome
// na rota que recupera os jogos, traz também quanto tempo falta para lançar ou há quanto tempo lançou
// na rota que recupera os jogos, você pode trazer a lista minificada, apenas com nome, data, quanto tempo falta, e imagem do jogo


// async function queries(){
//     const { data: games } = await supabase.from('games').select('*');

//     const { data: games, error } = await supabase.from('games').select('*').eq('name', 'Resident Evil');


//     const { data, error } = await supabase.from('games').insert([
//         { name: 'Game 1', genre: 'Action' },
//         { name: 'Game 2', genre: 'Adventure' }
//     ]);

//     const { data, error } = await supabase.from('games').delete().eq('id', 1);

//     const { data, error } = await supabase.from('games').update({ genre: 'RPG' }).eq('id', 1);

// }