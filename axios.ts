import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://f2ac-103-156-142-125.ngrok-free.app/api/v1'
})

Axios.interceptors.request.use((config) => {
  config.headers['ngrok-skip-browser-warning'] = 'any'

  return config
})

export default Axios
