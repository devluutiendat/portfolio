// utils/api.ts
import axios from 'axios';

export const api = axios.create({
  //withCredentials: true, 
  baseURL: process.env.AUTH_URL,
  withCredentials:true  
});