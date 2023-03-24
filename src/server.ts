import 'reflect-metadata'
import { app } from './config/app'
import { config } from './config/config'
import { Express } from 'express'
import { HealthCheckRouter } from './modules/health-check/health-check.router'
import { container } from 'tsyringe'

export const setupServer = (): Express => {
  container.register('app', {
    useValue: app,
  })

  const healthCheckRouter = container.resolve(HealthCheckRouter)
  healthCheckRouter.setup()
  return app
}

setupServer().listen(config.API_PORT, () => {
  console.log(`🚀 server running on: ${config.API_PORT} 🚀`)
})
