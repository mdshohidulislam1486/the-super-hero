import './Invitation.css'

const Invitation = (props) => {
    const {invited} = props;

    

    let invitationCost = 0;

    for(const guest of invited){
        invitationCost = invitationCost + guest.cost
 
    }

    return (
        <div className='invitation-container'>
            <div className='cost'>
                <h3>Invite your favourite celebrities</h3>
                <h5>Celebrity invited: {invited.length} </h5>
                <p>Invitation Cost: ${invitationCost}</p>
            </div>
            <div>
              { 
               invited.map(name =><div className="invited-guest" key ={name.name}><div><img src={name.img} alt="" /></div> <h5>{name.name}</h5></div>)
              }
            </div> 
        </div>
    );
};

export default Invitation;