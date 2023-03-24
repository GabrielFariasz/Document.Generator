import { autoInjectable } from 'tsyringe'

@autoInjectable()
export class HealthCheckController {
  status() {
    return {
      message: '🚀 Server up 🚀',
      timestamp: process.uptime(),
    }
  }
}
