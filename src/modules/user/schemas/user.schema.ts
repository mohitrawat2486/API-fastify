import { z } from 'zod'

// Common User Schema
export const userBaseSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  role: z.enum(['admin', 'editor', 'viewer']), // You can add more roles if needed
  isActive: z.boolean().optional(),
})

// Schema for creating a new user
export const createUserSchema = z.object({
  body: userBaseSchema,
})

// Schema for updating a user (partial)
export const updateUserSchema = z.object({
  params: z.object({
    id: z.string().length(24, 'Invalid user ID'), // Assuming MongoDB ObjectId
  }),
  body: userBaseSchema.partial(),
})

// Schema for getting a user by ID
export const getUserByIdSchema = z.object({
  params: z.object({
    id: z.string().length(24, 'Invalid user ID'),
  }),
})

// Schema for deleting a user
export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string().length(24, 'Invalid user ID'),
  }),
})

// Schema for getting users by role
export const getUsersByRoleSchema = z.object({
  params: z.object({
    role: z.enum(['admin', 'editor', 'viewer']),
  }),
})

// No schema needed for getAllUsers and getActiveUsers unless you add query params
export const getAllUsersSchema = z.object({})
export const getActiveUsersSchema = z.object({})
