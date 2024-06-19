import Player from "./components/Player.jsx";

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                  <Player name="Mando" symbol="X" />
                  <Player name="JoJo" symbol="X" />
                </ol>
                Game board
            </div>
        </main>
    );
}

export default App;
