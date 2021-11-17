import axios from 'axios'

const api = axios.create({
   baseURL: 'https://2swtcczgla.execute-api.us-east-1.amazonaws.com/prod',
   headers: {
      'Content-type': 'application/json'
   }
});


export const register=(userData, setIsLoading)=>{

 api.post('/register', userData)
 .then(res => {
   if(res.status === 200){
     window.location.replace('/')
   }
   setIsLoading(false)
 })
 .catch(error => {
     if(error.response.message) alert(error.response.message);
     if(error.response.data.error) alert(error.response.data.error)
     setIsLoading(false)
 });
}
export default api;