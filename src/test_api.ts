import { supabase } from "./database/supabase";


async function findAll(){
    const { data: games} = await supabase.from('games').select("name")
    console.log(games)
    console.log(games!.length)
}
// findAll()

async function findOne(){
    const { data: games } = await supabase.from('games_to_add').select("*")
    .eq('name', 'Albatroz');
    console.log(games)
    console.log(games!.length)
}
findOne()


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