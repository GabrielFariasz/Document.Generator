import { Express, Request, Response } from 'express'
import { autoInjectable, inject } from 'tsyringe'
import { IRouter } from '../../shared/interface/router.interface'
import { HealthCheckController } from './health-check.controller'

@autoInjectable()
export class HealthCheckRouter implements IRouter {
  constructor(
    @inject('app') private readonly app: Express,
    private readonly healthCheckController: HealthCheckController
  ) {}

  setup() {
    const routesPath = ['/', '/healthCheck', 'health-check']

    routesPath.map(path => {
      this.app.use(path, (_req: Request, res: Response) => {
        const status = this.healthCheckController.status()
        return res.status(200).json(status)
      })
    })

    return this.app
  }
}
