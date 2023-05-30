import express from "express"
import usersRouter from "./routes/users.routes"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())
app.use("/users", usersRouter)

export { app }
