import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export const PostLogin =  async (email, password) => {
    try {
        const body = {
          email,
          password
      }
        const response = await axios.post(`${BASE_URL}users/login`, body)
        return response.data
      } catch(error){
        alert(error.response.data.message)
      } 
};
export const PostSignup =  async (name, email, password) => {
  try {
      const body = {
        name,
        email,
        password,
    }
      const response = await axios.post(`${BASE_URL}users/register`, body)
      alert(response.data.message)
      
      return response.data
    } catch(error){
      alert(error.response.data.message)
    } 
};
export const GetInfoUser =  async (token) => {
  try {
      const response = await axios.get(`${BASE_URL}users`, { headers: { authorization: token }})      
      return response.data
    } catch(error){
      console.log(error.response)
    } 
};
