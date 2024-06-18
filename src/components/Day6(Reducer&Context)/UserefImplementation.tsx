import React, { useRef } from 'react';

export const UserefImplementation = () => {
    const ref = useRef<number>(0);

    const handleClick = () => {
        ref.current = ref.current + 1;
        alert(`You clicked ${ref.current} times!`);
    };

    return (
        <>
        <h3>Click the button to see the usecase of useRef</h3>
        <h4>ref : {ref.current}</h4>
        <button onClick={handleClick}>
            Click me!
        </button>
        </>
    );
};
