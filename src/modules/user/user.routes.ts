// src/modules/user/routes.ts
import { FastifyInstance } from 'fastify'
import { userController } from './user.controller'
import { userSchemas } from './schemas'

async function userRoutes(fastify: FastifyInstance) {
  
  // Get all users
  fastify.get('/users', {
    schema: userSchemas.getAllUsers
  }, userController.getAllUsers)

  // Get user by ID
  fastify.get('/users/:id', {
    schema: userSchemas.getUserById
  }, userController.getUserById)

  // Create new user
  fastify.post('/users', {
    schema: userSchemas.createUser
  }, userController.createUser)

  // Update user
  fastify.put('/users/:id', {
    schema: userSchemas.updateUser
  }, userController.updateUser)

  // Delete user
  fastify.delete('/users/:id', {
    schema: userSchemas.deleteUser
  }, userController.deleteUser)

  // Get users by role
  fastify.get('/users/role/:role', {
    schema: userSchemas.getUsersByRole
  }, userController.getUsersByRole)

  // Get active users
  fastify.get('/users/active', {
    schema: userSchemas.getActiveUsers
  }, userController.getActiveUsers)

}

export default userRoutes