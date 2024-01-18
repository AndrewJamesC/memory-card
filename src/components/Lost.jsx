import lostSound from "../assets/Homer_Simpson_Doh_Sound_Effect.mp3";

/* eslint-disable react/prop-types */
export default function Lost({ handlePlayAgain }) {
  new Audio(lostSound).play();

  return (
    <div className="lost-screen">
      <p className="you-lose top">D&apos;oh</p>
      <p className="you-lose bottom">You lose!</p>
      <img
        className="lost-img"
        src="/src/assets/img/lost-homer.jpg"
        alt="Homer is angry"
      />
      <button className="lost-btn" onClick={() => handlePlayAgain()}>
        Play Again
      </button>
    </div>
  );
}
