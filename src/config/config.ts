import dotenv from 'dotenv'
dotenv.config()

export const config = {
  API_PORT: process.env.API_PORT as string,
} 
