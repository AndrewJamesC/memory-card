/* eslint-disable react/prop-types */
export default function Lost({ handlePlayAgain }) {
  return (
    <div className="lost">
      <p>D&apos;oh, you lose!</p>
      <img src="/src/assets/img/lost-homer.jpg" alt="Homer is angry" />
      <button onClick={() => handlePlayAgain()}>Play Again</button>
    </div>
  );
}
