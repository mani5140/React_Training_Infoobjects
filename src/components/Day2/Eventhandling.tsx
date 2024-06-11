export const EventHandling = () => {

    const handleAlter = () =>{
        alert("i'm clicked...........");
    }

    return(
        <div>
            <h1>EventHandling in React</h1>
            <button onClick={handleAlter}>Click Me</button>
        </div>
    )
}