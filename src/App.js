import React, { useState } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'; 

function App() {

  const [userName, userNameSet] = useState({username: "Tarang", flag: 'false'});

  const userNameChangeHandler = (event) => {
    userNameSet({...userName , username: event.target.value});
  };

  return (
    <div className="App">
      <UserInput changed={userNameChangeHandler} currentName={userName.username} />
      <UserOutput userName={userName.username} />
      <UserOutput userName={userName.username} />
      <UserOutput userName={userName.username} />
    </div>
  );
}

export default App;
