import axios from 'axios';

// export const createProduct = async (formData) => {
//     return axios.post('http://localhost:3001/api/product', formData)
//         .then(response => {
//             console.log('Server Response: ', response)
//         })
//         .catch(error => {
//             console.error('Error: ', error);
//         });
// }

// export const createProduct = async (formData) => {
//     return axios
//       .post('http://localhost:3001/api/product', formData)
//       .then((response) => {
//         console.log('Server Response: ', response);
//       })
//       .catch((error) => {
//         console.error('Error: ', error);
//       });
//   };


export const createProduct = async (formData) => {
    if (!formData.hasOwnProperty('productName') || !formData.productName) {
      console.error('Error: Missing product name');
      console.log(formData)
      return;
    }
  
    if (!formData.hasOwnProperty('price') || !formData.price) {
      console.error('Error: Missing product price');
      return;
    }
  
    // Additional checks for other required properties could be added here
    
    return axios
      .post('http://localhost:3001/api/product', formData)
      .then((response) => {
        console.log('Server Response: ', response);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };