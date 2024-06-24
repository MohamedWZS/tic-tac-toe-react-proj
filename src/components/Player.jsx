import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // do not do that (suggested by react team)
        // setIsEditing(!isEditing); // => schedules a state update to true
        // setIsEditing(!isEditing); // => schedules also state update to true

        // functional form of the state updater
        // The function passed to setIsEditing receives the current state (isEditing) as prevIsEditing.
        setIsEditing((prevIsEditing) => !prevIsEditing);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? (
                    <input type="text" required value={name} />
                ) : (
                    <span className="player-name">{name}</span>
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
