import axios from "axios";


const API_URL = "http://localhost:3000"

//Get products from API

export const getProducts = (brand) => { 
    
    const url = brand ? `${API_URL}/products?brand=${brand}`
    : `${API_URL}/products?liquidaTech=${true}`
 
   return axios.get(url);


}

export const getUsers = () => { 
    
    const url = `${API_URL}/users`
   return axios.get(url);


}


// isso aqui para fazer reposição post, para executar, precisamos de um componente para isso.

export const addProduct = (product) => axios.post(`${API_URL}/products`, product);


//precisamos do corpo do produto:


export const updateProduct = (id, corpo) => axios.put(`${API_URL}/products/${id}`, corpo);

//Delete product from API

export const deleteProduct = async (id) => {

    const deleteUrl = `${API_URL}/products/${id}`
    //console.log(id);
    return await axios.delete(deleteUrl);

}







