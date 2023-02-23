import React from 'react';
import Homepage from './components/Homepage'

import { useSelector } from 'react-redux';

const Home = () => {

    const {products} = useSelector(state => state.products)
    console.log('cool', products)
    

    return(
        <>

        <div className="gridContainer">
        <div className='adminBodyContainer'>
            <div className='adminBodyRow'>
                <div className='adminBodyRow'>
                    {products && products.map(product => (
                        <Homepage key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Home