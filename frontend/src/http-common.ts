import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.1.1:3000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})
