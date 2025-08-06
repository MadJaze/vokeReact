import axios from "axios";


const API_URL = "http://localhost:3000"

export const getProducts = () => axios.get(`${API_URL}/products`); 

