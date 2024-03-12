import axios from "axios"

const api = axios.create({
  baseURL: 'http://ip/tech-news/'
})

export default api