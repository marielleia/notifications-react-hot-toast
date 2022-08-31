import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";

function HarryPotter() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        const getData = fetch("https://fedeperin-harry-potter-api.herokuapp.com/personajes")
            .then((response) => response.json())
            .then((json) => setCharacter(json));
        toast.promise(getData, {
            loading: "Loading data...",
            error: "Failed to load data.",
            success: "Data Loaded successfully!"
        }, {
            position: "bottom-right",
            autoClose: 5000,
            icon: "🌙",
            style: {
                background: "darkblue",
                color: "#fff",
            }
        })
    }, []);

    return (
        <div className="hp-container">
            <h1>Harry Potter Characters</h1>
            {character.map((x) => {
                return (
                    <div key={x.id}>
                        <h3>{x.personaje}</h3>
                        <h4>{x.casaDeHogwarts}</h4>
                        <img src={x.imagen} alt="character"></img>
                    </div>
                )
            })}
            <Toaster />
        </div>
    )
};
export default HarryPotter;