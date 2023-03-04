import { useState } from "react"


export default function pageTwo() {
    const [id, setId] = useState("");

   let onsubmit = () => {
        console.log("test")
    }

    return (
        <div>
            <h1>Page 2 Server side props</h1>

            <h3>Enter a User Id #</h3>

            <input value={id} onChange={({ target }) => setId(target.value)}/>

            <button onClick={onsubmit}>Get User</button>
        </div>
    )
}