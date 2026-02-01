import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.API_PORT || 3333

app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`)
})