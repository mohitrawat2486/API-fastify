import { FastifyInstance } from 'fastify'
import { userController } from './user.controller'

// Import each schema individually
import {
  getAllUsersSchema,
  getUserByIdSchema,
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
  getUsersByRoleSchema,
  getActiveUsersSchema
} from './schemas/user.schema'

async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/users', { schema: getAllUsersSchema }, userController.getAllUsers)
  fastify.get('/users/:id', { schema: getUserByIdSchema }, userController.getUserById)
  fastify.post('/users', { schema: createUserSchema }, userController.createUser)
  fastify.put('/users/:id', { schema: updateUserSchema }, userController.updateUser)
  fastify.delete('/users/:id', { schema: deleteUserSchema }, userController.deleteUser)
  fastify.get('/users/role/:role', { schema: getUsersByRoleSchema }, userController.getUsersByRole)
  fastify.get('/users/active', { schema: getActiveUsersSchema }, userController.getActiveUsers)
}

export default userRoutes
