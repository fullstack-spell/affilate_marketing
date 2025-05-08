import axios from 'axios';
import 'dotenv';

const currentUrl = window.location.href;
const currentDomain = new URL(currentUrl).hostname;


export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:8000/api`
    : `https://${currentDomain}:82/api`;

export const authorized = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

