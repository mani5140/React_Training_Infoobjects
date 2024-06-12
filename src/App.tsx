import React from 'react';
import './App.css';
import { IUser } from './interfaces/IUser';
import { usersData } from './interfaces/IUser';
import { Users } from './components/Day1/Users/Users';
import { EventHandling } from './components/Day2/Eventhandling';
import { EventBubbling } from './components/Day2/EventBubbling';
import { FormHandling } from './components/Day2/FormHandling';
import StateAsImmutable from './components/Day2/StateAsImmutable';
import Todo from './components/Day3/Todo';

function App() {

  return (
    <div className="App">
      <Users users={usersData} />
      <EventHandling />
      <EventBubbling />
      <FormHandling />
      <StateAsImmutable />
      <Todo />
    </div>
  );
}

export default App;
