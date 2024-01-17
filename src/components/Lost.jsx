import lostSound from "../assets/Homer_Simpson_Doh_Sound_Effect.mp3";

/* eslint-disable react/prop-types */
export default function Lost({ handlePlayAgain }) {
  new Audio(lostSound).play();
  return (
    <div className="lost-screen">
      <p>D&apos;oh, you lose!</p>
      <img src="/src/assets/img/lost-homer.jpg" alt="Homer is angry" />
      <button onClick={() => handlePlayAgain()}>Play Again</button>
    </div>
  );
}
