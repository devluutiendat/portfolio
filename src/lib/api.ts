// utils/api.ts
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_AUTH_URL 
  ? `${process.env.NEXT_PUBLIC_AUTH_URL}/api` 
  : '/api'; // Fallback for production

export const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true  
});