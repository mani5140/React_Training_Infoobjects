import React from 'react';
import './App.css';
import { Users } from './components/Users/Users';
import { usersData } from './usersData';
import { EventHandling } from './components/Day2/Eventhandling';
import { EventBubbling } from './components/EventBubbling';
import { FormHandling } from './components/FormHandling';

function App() {

  return (
    <div className="App">
      {/* <Users users={usersData} /> */}
      <EventHandling />
      <EventBubbling />
      <FormHandling />
    </div>
  );
}

export default App;
