// src/modules/user/types.ts

export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserInput {
  name: string
  email: string
  role?: 'admin' | 'user' | 'moderator'
  active?: boolean
}

export interface UpdateUserInput {
  name?: string
  email?: string
  role?: 'admin' | 'user' | 'moderator'
  active?: boolean
}

export interface GetUserParams {
  id: string
}