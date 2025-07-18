// src/index.ts
import buildApp from './app'

async function startServer() {
  const app = await buildApp()

  try {
    await app.listen({ port: 3000, host: '0.0.0.0' })
    console.log(`🚀 Server listening on http://localhost:3000`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

startServer()
