import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:8766/tech-news/'
})

export default api