/* eslint-disable react/prop-types */
export default function Card({ src, name, id, handleCardClick }) {
  return (
    <div
      className="card-container"
      id={`card${id}`}
      onClick={(event) => handleCardClick(event)}
    >
      <img
        className="character-img"
        src={src}
        alt={name}
        id={`img${id}`}
        draggable="false"
      />
      <p id={`para${id}`} className="character-name">
        {name}
      </p>
    </div>
  );
}
