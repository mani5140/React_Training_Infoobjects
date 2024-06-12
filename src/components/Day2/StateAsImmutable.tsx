import { useState } from 'react';

interface Iperson {
    name: string;
    city: string;
    state: string;
}

export default function StateAsImmutable() {
    
    const [person, setPerson] = useState<Iperson>({
        name: 'mani',
        city: 'bargarh',
        state: 'Odisha'
    });

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({
            ...person,
            city: e.target.value
        });
    }

    function handleStateChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({
            ...person,
            state: e.target.value
        });
    }

    return (
        <div style={{ background: "lightblue" }}>
            <h1>In React, we should consider a state as immutable</h1>
            <label>
                First name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <br />
            <label>
                Last name:
                <input
                    value={person.city}
                    onChange={handleCityChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    value={person.state}
                    onChange={handleStateChange}
                />
            </label>
            <p>
                {person.name}{' '}
                {person.city}{' '}
                ({person.state})
            </p>
        </div>
    );
}