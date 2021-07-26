import http from '../http-common'
import { CreateMovement } from '@/types/Movement'

class MovementDataService {
  getAll (id: number) {
    return http.get(`/stuffs/${id}/movements`)
  }

  create (id: number, data: CreateMovement) {
    return http.post(`/stuffs/${id}/movements`, data)
  }
}

export default new MovementDataService()
