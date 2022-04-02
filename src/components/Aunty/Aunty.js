import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Aunty</h1>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a House</button>
        </div>
    );
};

export default Aunty;