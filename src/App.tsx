import React from 'react';
import './App.css';
import { Users } from './components/Users/Users';
import { usersData } from './usersData';

function App() {

  return (
    <div className="App">
      <Users users={usersData} />
    </div>
  );
}

export default App;
