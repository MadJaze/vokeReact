import axios from "axios";


const API_URL = "http://localhost:3000"



export const getProducts = (brand) => { 
    
    const url = brand ? `${API_URL}/products?brand=${brand}`
    : `${API_URL}/products`
 
   return axios.get(url);


}



export const deleteProduct = async (id) => {

    const deleteUrl = `${API_URL}/products/${id}`
    //console.log(id);
    return await axios.delete(deleteUrl);

}







