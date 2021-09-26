import React, { useEffect, useState } from 'react';
import './Girls.css'
import Card from '../Card/Card'
import Invitation from '../Invitation/Invitation';


const Girls = () => {
const  [girls, setGirls] = useState([]);
const  [invited, setInvited] = useState([])

useEffect(()=>{
    fetch('./taylorSquad.JSON')
        .then(res => res.json())
        .then(data => setGirls(data))
}, [])

const invitationHandle=girl=>{
        const invitationList = [...invited, girl]
        setInvited(invitationList)

}
    return (
        <div className='container'>
            <div className='card-container'>
                {
                    girls.map(girl =><Card
                        key={girl.name}
                        girl={girl}
                        invitationHandle={invitationHandle}
                        >
                        </Card>) 
                } 
            </div>
            <div className='invitation-list'>
                <Invitation invited={invited}></Invitation>
            </div>
        </div>
    );
};

export default Girls;