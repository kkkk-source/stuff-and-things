import http from '../http-common'
import { CreateStuff } from '@/types/Stuff'

class StuffDataService {
  getAll () {
    return http.get('/stuffs')
  }

  get (id: number) {
    return http.get(`/stuffs/${id}`)
  }

  create (data: CreateStuff) {
    return http.post('/stuffs', data)
  }

  delete (id: number) {
    return http.delete(`/stuffs/${id}`)
  }
}

export default new StuffDataService()
