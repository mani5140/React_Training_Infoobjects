import { useRef } from 'react';

export default function UseRef() {
    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);


    function handleClick() {
        if (inputRef1.current) {
            inputRef1.current.focus();
        }
    }

    function handleMouseEnter() {
        if (inputRef2.current) {
            inputRef2.current.focus();
        }
    }

    return (
        <>
        <h1>useRef example :)</h1>
            <input ref={inputRef1} />
            <button onClick={handleClick}>
                Focus the input
            </button>
            <br /><br />
            <input ref={inputRef2} />
            <button onMouseEnter={handleMouseEnter}>
                Focus the input
            </button>
        </>
    );
}
