import React from 'react'
import PropTypes from 'prop-types'

function Profile (props) {

    const handleName =()=>{
        if(props.username===Profile.defaultProps.username){
            alert(`Login with a valid ID`)
        }else {
            alert(`Welcome back... ${props.username}`)
        }
        
    }

  return (
    <div>
        <div className='image'>{props.children}</div>
        <h2 style={{margin:'30px 0', textDecoration:'solid underline', color:'white'}}>USER PROFILE</h2>
        <div style={{display:'block', justifyContent:'space-around', background:'#eee',width:'50%', border:'none'}}>
            <h3>Username: <span className='spec'>{props.username}</span> </h3>
            <h3>Bio: <span className='spec'>{props.bio}</span> </h3>
            <h3>Profession: <span className='spec'>{props.profession}</span> </h3>

            <button onClick={handleName} style={{backgroundColor:'lightBlue', color:'black', padding:'10px',margin:'5px', borderRadius:'5px', fontSize:'15px', fontWeight:'bolder', cursor:'pointer'}}>Display Profile</button>
        </div>
        
    </div>
  )
}

Profile.propTypes = {
    username: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,

};

Profile.defaultProps ={
    username: 'unknown user',
    bio: 'none',
    profession: 'none'
}

export default Profile