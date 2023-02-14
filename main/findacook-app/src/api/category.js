import axios from 'axios';

export const createCategory = async (formData) => {
    return axios.post('http://localhost:3001/api/category', formData)
        .then(response => {
            console.log('Server Response: ', response)
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}


