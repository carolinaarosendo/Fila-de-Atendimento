import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// rotas

app.listen(PORT, () => {
  console.log(`Aplicação rodando -> http://localhost:${PORT}`)
})