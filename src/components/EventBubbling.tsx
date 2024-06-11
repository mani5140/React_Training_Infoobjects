import React from 'react'

export const EventBubbling = () => {
    function handleClick(message: string) {
        alert(message);
    }
    const Child = () => {
        return <div>
            <button onClick={(e) => {
                e.stopPropagation();
                handleClick("Child event is called...")
            }}>
                i'm child component</button>
        </div>
    }
    return (
        <div>
            <div onClick={(e) => handleClick("Parent event is called...")}
                style={{ backgroundColor: "lightblue", padding: "5px"}}>
                <h1>this is parent component</h1>
                <p>we can stop EventBubbling by useing stopPropagation() method</p>
                <Child />
            </div>



        </div>
    )
}