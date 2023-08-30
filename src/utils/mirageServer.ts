import { createServer, type Server } from 'miragejs'

import { timeLineData, defaultSkillsData } from './data'

export function makeServer ({ environment = 'development' }: { environment?: string } = {}): Server {
  return createServer({
    environment,

    routes () {
      this.namespace = 'api'

      this.get('/educations', () => {
        return timeLineData
      })

      this.get('/skills', () => {
        return defaultSkillsData
      })
    }
  })
}
