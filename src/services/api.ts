import axios from "axios"

const api = axios.create({
  baseURL: 'http://10.234.90.77:8766/tech-news/'
})

export default api