import { setupWorker } from 'msw/browser'
import { authHandlers } from './handlers/auth'

export const worker = setupWorker(...authHandlers)

// Start the MSW worker
worker.start({
  onUnhandledRequest: 'bypass' // Ignore unhandled requests
}) 