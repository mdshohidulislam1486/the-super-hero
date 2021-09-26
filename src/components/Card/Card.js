import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeartBroken} from '@fortawesome/free-solid-svg-icons';

 
 
const Card = (props) => {
    const {name, age, residence, cost, img, profession} = props.girl
    return (
        <div className='single-cart'>
            <div className='girl-img'>
                <img src={img} alt=""/>
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Profession: {profession}</p>
                <p>Lives in: {residence}</p>
                <p>Invitation Cost: {cost}</p>
                <button onClick={()=>props.invitationHandle(props.girl)}> <FontAwesomeIcon icon={faHeartBroken} /> Invite</button>
            </div>
        </div>
    );
};

export default Card;