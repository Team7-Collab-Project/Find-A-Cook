   const data = [
        {
            id: "price_1MYbiHDYuzoeBKxG0GmseQte",
            name: "American Corndogs",
            price: 10,
            image: "../images/corndogs.jpg",
        },
        {
            id: "price_1MYbkwDYuzoeBKxGkaG8Mzkr",
            name: "Gnocchi",
            price: 12,
            image: "../images/gnocchi.jpg",
        },
        {
            id: "price_1MYblIDYuzoeBKxGSnfbEXgD",
            name: "Beef Burger",
            price: 13,
            image: "../images/burger.jpg",
        },
        {
            id: "price_1MYbmPDYuzoeBKxGx2nIffLX",
            name: "Cottage Pie",
            price: 15,
            image: "../images/pie.jpg",
        },
        {
            id: "price_1MYbn4DYuzoeBKxGR5gCkRqk",
            name: "Bao Buns",
            price: 10,
            image: "../images/bao.jpg",
        }
    ];


function getProductData(id) {
    let productData = data.find(product => product.id === id);
    // console.log({id})

    if (productData == undefined) {
        console.log("Product Item does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}


export {data, getProductData}