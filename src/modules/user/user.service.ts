// src/modules/user/service.ts
import { User, CreateUserInput, UpdateUserInput } from './user.types'

// Dummy data - Replace with your actual database calls
let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', active: false, createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'moderator', active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user', active: true, createdAt: new Date(), updatedAt: new Date() }
]

let nextId = 6

export const userService = {
  
  async getAllUsers(): Promise<User[]> {
    // Replace with actual database query
    return users
  },

  async getUserById(id: number): Promise<User | null> {
    // Replace with actual database query
    const user = users.find(u => u.id === id)
    return user || null
  },

  async createUser(userData: CreateUserInput): Promise<User> {
    // Replace with actual database insert
    const newUser: User = {
      id: nextId++,
      ...userData,
      active: userData.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    users.push(newUser)
    return newUser
  },

  async updateUser(id: number, updateData: UpdateUserInput): Promise<User | null> {
    // Replace with actual database update
    const userIndex = users.findIndex(u => u.id === id)
    
    if (userIndex === -1) {
      return null
    }
    
    users[userIndex] = {
      ...users[userIndex],
      ...updateData,
      updatedAt: new Date()
    }
    
    return users[userIndex]
  },

  async deleteUser(id: number): Promise<boolean> {
    // Replace with actual database delete
    const userIndex = users.findIndex(u => u.id === id)
    
    if (userIndex === -1) {
      return false
    }
    
    users.splice(userIndex, 1)
    return true
  },

  async getUsersByRole(role: string): Promise<User[]> {
    // Replace with actual database query
    return users.filter(u => u.role === role)
  },

  async getActiveUsers(): Promise<User[]> {
    // Replace with actual database query
    return users.filter(u => u.active === true)
  }

}