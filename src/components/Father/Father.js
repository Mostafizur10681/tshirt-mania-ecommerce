import React from 'react';
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import './Father.css'

const Father = ({ house, gift }) => {
    return (
        <div>
            <h1>Father</h1>
            <p>House: {house}</p>
            <div className='father-children'>
                <MySelf house={house} gift={gift}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;