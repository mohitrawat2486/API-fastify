// src/app.ts
import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyMultipart from '@fastify/multipart'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'

import registerRoutes from './routes'

export default async function buildApp() {
  const app = Fastify({
    logger: true,
  })

  // Enable CORS
  await app.register(fastifyCors, {
    origin: '*',
  })

  // JWT plugin
  await app.register(fastifyJwt, {
    secret: 'super-secret-key', // Use env in prod
  })

  // Multipart file upload support
  await app.register(fastifyMultipart)

  // Swagger setup
  await app.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Admin Panel API',
        description: 'API documentation for Admin Panel',
        version: '1.0.0',
      },
      tags: [{ name: 'User' }, { name: 'FAQ' }],
    },
  })

  await app.register(fastifySwaggerUI, {
    routePrefix: '/docs',
  })

  // Register modular routes
  registerRoutes(app)

  return app
}
