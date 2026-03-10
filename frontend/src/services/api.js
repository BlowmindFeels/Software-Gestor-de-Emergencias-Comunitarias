import axios from 'axios'

const base = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api'
export const api = axios.create({ baseURL: base })

export const fetchEmergencias = () => api.get('/emergencias')
export const postEmergencia = (data) => api.post('/emergencias', data)
