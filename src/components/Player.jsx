import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // do not do that (suggested by react team)
        // setIsEditing(!isEditing); // => schedules a state update to true
        // setIsEditing(!isEditing); // => schedules also state update to true

        // functional form of the state updater
        // The function passed to setIsEditing receives the current state (isEditing) as prevIsEditing.
        setIsEditing((prevIsEditing) => !prevIsEditing);
    }

    // when the user presses a button character an event object is passed to the function in our case we call it event.
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing ? (
                    <input type="text" required value={playerName} onChange={handleChange} />
                ) : (
                    <span className="player-name">{playerName}</span>
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
