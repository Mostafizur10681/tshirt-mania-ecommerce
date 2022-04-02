import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, gift }) => {
    return (
        <div>
            <h1>MySelf</h1>
            <p><small>House: {house}</small></p>
            <Special gift={gift}></Special>
        </div>
    );
};

export default MySelf;