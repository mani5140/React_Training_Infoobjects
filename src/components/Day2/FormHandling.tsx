import { useState } from "react"

export const FormHandling = () => {
    const [name, setName] = useState<string>('');
    const [city,setCity] = useState<string>('');

    const handleSubmit = () => {
        alert(`My name is ${name}, i belongs to ${city}`)
        setName("");
        setCity("");
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }} style={{background: "lightblue"}}>
            <h1>Form Handling</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
            <br />
            <input type="number" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter age"/>
            <br />
            <button type="submit">Submit</button>
            <br />
            <p>e.preventDefault() prevents the default browser behavior for the few events that have it.</p>
        </form>
    )
}