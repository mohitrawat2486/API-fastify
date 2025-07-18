import {
  createUserSchema,
  updateUserSchema,
  getUserByIdSchema,
  deleteUserSchema,
  getUsersByRoleSchema,
  getAllUsersSchema,
  getActiveUsersSchema,
} from './user.schema'

export const userSchemas = {
  createUser: { body: createUserSchema.shape.body },
  updateUser: { params: updateUserSchema.shape.params, body: updateUserSchema.shape.body },
  getUserById: { params: getUserByIdSchema.shape.params },
  deleteUser: { params: deleteUserSchema.shape.params },
  getUsersByRole: { params: getUsersByRoleSchema.shape.params },
  getAllUsers: {},
  getActiveUsers: {},
}
