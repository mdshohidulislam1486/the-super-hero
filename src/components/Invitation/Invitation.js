import React, { useEffect, useState } from 'react';
import './Invitation.css'

const Invitation = (props) => {
    console.log(props.invited)
    const {invited} = props;

    

    let invitationCost = 0;

    for(const guest of invited){
        invitationCost = invitationCost + guest.cost
 
    }

    return (
        <div className='invitation-container'>
            <h2>Total guests invited: {invited.length} </h2>
            <p>Invitation Cost: ${invitationCost}</p>
            <div className="invited-guest">
              { 
               invited.map(name =><div><div><img src={name.img} alt="" /></div> <h5>{name.name}</h5></div>)
              }
            </div> 
        </div>
    );
};

export default Invitation;