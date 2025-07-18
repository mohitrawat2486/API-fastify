import { FastifyInstance } from 'fastify'
import { getAllFAQs, createFAQ } from './faq.controller'

export default async function faqRoutes(app: FastifyInstance) {
  app.get('/faqs', getAllFAQs)
  app.post('/faqs', createFAQ)
}
