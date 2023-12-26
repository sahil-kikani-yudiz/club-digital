import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://c07f-103-156-142-125.ngrok-free.app/api/v1'
})

Axios.interceptors.request.use((config) => {
  config.headers['ngrok-skip-browser-warning'] = 'any'

  return config
})

export default Axios
