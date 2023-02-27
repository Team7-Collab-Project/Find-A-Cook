import axios from 'axios';

// export const createCategory = async (formData) => {
//     const config ={
//         headers:{
//             'Content-Type': 'application/json',
//         },
//     };

//     const response = await axios.post('http://localhost:3001/api/category', formData, config);

//     return response;
// }


export const createCategory = async (formData) => {
    return axios.post('http://localhost:3001/api/category', formData)
        .then(response => {
            console.log('Server Response: ', response)
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}