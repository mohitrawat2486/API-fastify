// fastify.ts
import app from './src'
import dotenv from 'dotenv'

dotenv.config()

const start = async () => {
  try {
    const port = process.env.PORT || 4000
    await app.listen({ port: Number(port), host: '0.0.0.0' })
    console.log(`Server running on http://localhost:${port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
