import express from 'express';
import { supabase } from './database/supabase';
import { GameType } from './@types/@game';

const app = express()
app.use(express.json()) //para habilitar o envio de informações em json

app.get('/games', async (req, res) => {
    try {
        const { data: games } = await supabase.from('games').select("*")
        res.status(200).json({ games: games })
    } catch(error){
        console.error(error)
        throw error
    }
})

app.post('/create_game', async (req, res) => {
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
}) 



app.listen(process.env.PORT? Number(process.env.PORT) : 5000, () => {
    console.log(`🚀 server is running at http://localhost:${process.env.PORT? process.env.PORT: 5000}`)
})