import express from 'express';
import { GamesRoutes } from './routes/GamesRoutes';

const app = express()
app.use(express.json()) //para habilitar o envio de informações em json
app.use('/games', GamesRoutes)




app.listen(process.env.PORT? Number(process.env.PORT) : 5000, () => {
    console.log(`🚀 server is running at http://localhost:${process.env.PORT? process.env.PORT: 5000}`)
})