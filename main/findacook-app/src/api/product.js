import axios from "axios"

export const createProduct = async (formData) => {
    return axios.post('http://localhost:3001/api/product', formData)
        .then(response => {
            console.log('Server Response: ', response)
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}