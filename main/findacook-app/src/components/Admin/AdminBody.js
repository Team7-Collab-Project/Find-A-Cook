import React from 'react';
import _Products from '../Menu_Test/_Products'

import { useSelector } from 'react-redux';

const AdminBody = () => {

    const {products} = useSelector(state => state.products)
    console.log('cool', products)

    return(
        <>
        <div className='adminBodyContainer'>
            <div className='adminBodyRow'>
                <div className='adminBodyRow'>
                    {products.map(product => (
                        <_Products key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default AdminBody