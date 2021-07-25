import http from '../http-common'
import { CreateStuff } from '@/types/Stuff'

class StuffDataService {
  getAll () {
    return http.get('/stuffs')
  }

  create (data: CreateStuff) {
    return http.post('/stuffs', data)
  }
}

export default new StuffDataService()
