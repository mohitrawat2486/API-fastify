import { FastifyInstance } from 'fastify'

//import faqRoutes from '../modules/faq/faq.routes'
//import menuRoutes from '../modules/menu/menu.routes'
import userRoutes from '../modules/user/user.routes'

export default async function registerRoutes(app: FastifyInstance) {
  //app.register(faqRoutes, { prefix: '/api/faq' })
  //app.register(menuRoutes, { prefix: '/api/menus' })
  app.register(userRoutes, { prefix: '/api/users' })
}
