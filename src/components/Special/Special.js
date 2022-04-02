import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';


const Special = ({ gift }) => {
    const [house, setHouse] = useContext(RingContext)
    const handleSpecial = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        <div>
            <h1>Special</h1>
            <p>Gift: {house}</p>
            <button onClick={handleSpecial}>Buy a House</button>
        </div>
    );
};

export default Special;