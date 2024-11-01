import React, { useState, useEffect } from "react";

const App = () => {
    const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"])

    // useEffect(() => {
    //     setTimeout(() =>{
    //         setUsuarios([...usuarios, "Ismael"]);
    //     },3000)
    // }, [])

    return (
        <div className="App">
            <h1>Hello DIO!</h1>
            {usuarios.map((item) => (
            <p>{item}</p>
            ))}
        </div>
    );
}

export default App;