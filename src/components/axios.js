import axios from 'axios'

 const api= axios.create({
    baseURL: `https://a6lnno41t7.execute-api.us-east-1.amazonaws.com/Production/`
 });
 export default api;


