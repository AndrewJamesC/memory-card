import lostSound from "../assets/Homer_Simpson_Doh_Sound_Effect.mp3";
import lostHomer from "../assets/img/lost-homer.jpg";

/* eslint-disable react/prop-types */
export default function Lost({ handlePlayAgain }) {
  new Audio(lostSound).play();

  return (
    <div className="lost-screen">
      <p className="you-lose top">D&apos;oh</p>
      <p className="you-lose bottom">You lose!</p>
      <img className="lost-img" src={lostHomer} alt="Homer is angry" />
      <button className="lost-btn" onClick={() => handlePlayAgain()}>
        Play Again
      </button>
    </div>
  );
}
