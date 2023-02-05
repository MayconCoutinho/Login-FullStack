import cors from 'cors'
import express from 'express'
import { usersRouter } from './router/usersRouter'

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})
app.use("/users", usersRouter)
