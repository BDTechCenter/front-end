import axios from "axios"

const hostURL = process.env.NEXT_PUBLIC_API_HOST

const api = axios.create({
  baseURL: `${hostURL}/tech-news/`
})

export default api