import axios from 'axios';


axios.defaults.baseURL = 'https://63e0bf8c65b57fe606488be1.mockapi.io';

export default async function fetchOneContact(id) {
   try {
      const response = await axios.get(`/contacts/${id}`)
      return response.data
   } catch (error) {
       console.log(error.message)
   }
}