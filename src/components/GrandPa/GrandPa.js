import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import './GrandPa.css'

export const RingContext = createContext('ring')
const GrandPa = () => {
    const [house, setHouse] = useState(1)

    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    const gift = 'Diamond Ring'
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div>
                <h1>GrandPa</h1>
                <p>House: {house}</p>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <div className='grandpa'>
                    <Father house={house} gift={gift}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;