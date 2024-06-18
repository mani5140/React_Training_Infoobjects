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
import AvoidRedundantState from './components/Day4/AvoidRedundantState';
import Parent from './components/Day4/LiftingStateUp';
import PreservingState from './components/Day4/PreservingState';
import Counter from './components/Day5/Reducer';
import { ThemeProvider } from './components/Day5/ThemeContext';
import Theme from './components/Day5/Theme';
import { TodoProvider } from './components/Day6(Reducer&Context)/TodoContext';
import { AddTodo } from './components/Day6(Reducer&Context)/AddTodo';
import { TodoList } from './components/Day6(Reducer&Context)/TodoList';
import UseRef from './components/Day7/UseRef';
import { UserefImplementation } from './components/Day6(Reducer&Context)/UserefImplementation';


function App() {

  return (
    <div className="App">
      <Users users={usersData} />
      <EventHandling />
      <EventBubbling />
      <FormHandling />
      <StateAsImmutable />
      <Todo />
      <AvoidRedundantState />
      <Parent />
      <PreservingState />
      <Counter />
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
      <UserefImplementation />
      <UseRef />
      
    </div>
  );
}

export default App;
