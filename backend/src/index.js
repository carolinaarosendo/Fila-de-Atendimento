import express from 'express';
const app = express()

app.use(express.json())

// conexão com o banco de dados

// rotas



app.listen(3000, () => {
  console.log("Aplicação rodando -> http://localhost:3000")
})