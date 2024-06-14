import React, { useState, ChangeEvent } from 'react';

export default function AvoidRedundantState() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const fullName: string = `${firstName} ${lastName}`;

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>): void {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>): void {
    setLastName(e.target.value);
  }

  return (
    <div style={{background: "lightblue"}}>
      <h2>Sign up page</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your full name is: <b>{fullName}</b>
      </p>
    </div>
  );
}
