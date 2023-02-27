import React from 'react';
import '../CSS/Style.css'

function Navbar() {
    return (
        <div className='divContainer'>
            <div className='divWrapper'>
                <ul>
                    <li className='left'>left</li>
                    <li className='center'>right</li>
                    <li className='right'>center</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar