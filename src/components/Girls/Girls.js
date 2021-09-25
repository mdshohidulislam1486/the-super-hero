import React, { useEffect, useState } from 'react';
import './Girls.css'
import Card from '../Card/Card'


const Girls = () => {
const  [girls, setGirls] = useState([])

useEffect(()=>{
    fetch('./taylorSquad.JSON')
        .then(res => res.json())
        .then(data => setGirls(data))
}, [])

    return (
        <div className='container'>
            <div className='card-container'>
                {
                    girls.map(girl =><Card girl={girl}></Card>) 
                } 
            </div>
            <div>
                <h2>This is total </h2>
            </div>
        </div>
    );
};

export default Girls;