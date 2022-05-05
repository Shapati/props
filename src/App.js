import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import Picture from './profilepic.png'

function App() {
  return (
    <div className="App">

        <Profile 
        username='Samuel Brian' 
        bio='I love to code' 
        profession='Freelancer'
        > 
        {/* children prop */}
        <div style={{display:'flex', flexDirection:'row-reverse'}} className="image">
          <img style={{borderRadius:'20px'}} src={Picture} />
        </div>

        </Profile>
    </div>
  );
}

export default App;
