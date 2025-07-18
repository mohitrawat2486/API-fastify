
// src/modules/user/controller.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { userService } from './user.service'
import { CreateUserInput, UpdateUserInput, GetUserParams } from './user.types'

export const userController = {
  
  async getAllUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await userService.getAllUsers()
      return {
        success: true,
        data: {
          users,
          total: users.length
        }
      }
    } catch (error) {
      return reply.status(500).send({
        success: false,
        error: 'Failed to fetch users'
      })
    }
  },

  async getUserById(request: FastifyRequest<{ Params: GetUserParams }>, reply: FastifyReply) {
    try {
      const { id } = request.params
      const user = await userService.getUserById(parseInt(id))
      
      if (!user) {
        return reply.status(404).send({
          success: false,
          error: 'User not found'
        })
      }
      
      return {
        success: true,
        data: user
      }
    } catch (error) {
      return reply.status(500).send({
        success: false,
        error: 'Failed to fetch user'
      })
    }
  },

  async createUser(request: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) {
    try {
      const userData = request.body
      const newUser = await userService.createUser(userData)
      
      return reply.status(201).send({
        success: true,
        data: newUser,
        message: 'User created successfully'
      })
    } catch (error) {
      return reply.status(400).send({
        success: false,
        error: 'Failed to create user'
      })
    }
  },

  async updateUser(request: FastifyRequest<{ Params: GetUserParams, Body: UpdateUserInput }>, reply: FastifyReply) {
    try {
      const { id } = request.params
      const updateData = request.body
      const updatedUser = await userService.updateUser(parseInt(id), updateData)
      
      if (!updatedUser) {
        return reply.status(404).send({
          success: false,
          error: 'User not found'
        })
      }
      
      return {
        success: true,
        data: updatedUser,
        message: 'User updated successfully'
      }
    } catch (error) {
      return reply.status(500).send({
        success: false,
        error: 'Failed to update user'
      })
    }
  },

  async deleteUser(request: FastifyRequest<{ Params: GetUserParams }>, reply: FastifyReply) {
    try {
      const { id } = request.params
      const deleted = await userService.deleteUser(parseInt(id))
      
      if (!deleted) {
        return reply.status(404).send({
          success: false,
          error: 'User not found'
        })
      }
      
      return {
        success: true,
        message: 'User deleted successfully'
      }
    } catch (error) {
      return reply.status(500).send({
        success: false,
        error: 'Failed to delete user'
      })
    }
  },

  async getUsersByRole(request: FastifyRequest<{ Params: { role: string } }>, reply: FastifyReply) {
    try {
      const { role } = request.params
      const users = await userService.getUsersByRole(role)
      
      return {
        success: true,
        data: {
          users,
          total: users.length,
          role
        }
      }
    } catch (error) {
      return reply.status(500).send({
        success: false,
        error: 'Failed to fetch users by role'
      })
    }
  },

  async getActiveUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await userService.getActiveUsers()
      
      return {
        success: true,
        data: {
          users,
          total: users.length
        }
      }
    } catch (error) {
      return reply.status(500).send({
        success: false,
        error: 'Failed to fetch active users'
      })
    }
  }

}