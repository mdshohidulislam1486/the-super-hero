import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    const {name, age, residence, cost, img, profession} = props.girl
    return (
        <div className='single-cart'>
            <div className='girl-img'>
                <img src={img} alt=""/>
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Proession: {profession}</p>
                <p>Lives in: {residence}</p>
                <p>Invitation Cost: {cost}</p>
            </div>
        </div>
    );
};

export default Card;