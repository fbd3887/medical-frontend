import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
})

const authHeader = () => {
  let user = JSON.parse(window.localStorage.getItem('user-token'))
  if (user && user !== '') {
    return { headers: { Authorization: `Bearer ${user}` } }
  } else return
}

export const register = (userData, setIsLoading, toast) => {
  api
    .post('/register', userData)
    .then((res) => {
      if (res.status === 200) {
        window.location.replace('/')
      }
      setIsLoading(false)
    })
    .catch((error) => {
      if (error.response.message) toast.error(error.response.message)
      if (error.response.data.error) toast.error(error.response.data.error)
      setIsLoading(false)
    })
}

export const login = (userData, setIsLoading, toast) => {
  return api.post('/login', userData).catch((error) => {
    if (error.response.message) toast.error(error.response.message)
    if (error.response.data.error) toast.error(error.response.data.error)
    setIsLoading(false)
  })
}

export const getUser = () => {
  return api.get('/user', authHeader()).catch((err) => console.log(err))
}

export const updateUser = (userData, setIsLoading, toast) => {
  api
    .post('/updateUser', userData, authHeader())
    .then((res) => {
      if (res.status === 200) {
        window.location.replace('/account')
      }
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error.response)
      if (error.response.message) toast.error(error.response.message)
      if (error.response.data.error) toast.error(error.response.data.error)
      setIsLoading(false)
    })
}

export default api
