/* eslint-disable react/prop-types */
import woohoo from "../assets/homer-woohoo.mp3";

export default function Win({ handlePlayAgain }) {
  new Audio(woohoo).play();
  return (
    <div className="win-screen">
      <p>Woo Hoo!</p>
      <img src="src/assets/img/homer-win.jpg" alt="Homer wins" />
      <button onClick={() => handlePlayAgain()}>Play Again</button>
    </div>
  );
}
