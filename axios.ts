import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://192.168.11.136:8000/api/v1/manager'
})

// Axios.interceptors.request.use(
//   (req) => {
//     const token = localStorage.getItem('token') || sessionStorage.getItem('token')
//     if (!req.headers.Authorization && token) {
//       req.headers.Authorization = token
//       return req
//     }
//     return req
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )
// Axios.interceptors.response.use(
//   (res) => {
//     return res
//   },
//   (err) => {
//     if ((err?.response && err?.response?.status === 417) || err?.response?.status === 401) {
//       removeToken()
//       navigationTo({ to: '/login', replace: true })
//       return Promise.reject(err)
//     }
//     return Promise.reject(err)
//   }
// )

export default Axios
