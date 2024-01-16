/* eslint-disable react/prop-types */
export default function Card({ src, name, id }) {
  return (
    <div className="card-container" id={`card${id}`}>
      <img className="character-img" src={src} alt={name} />
      <p className="character-name">{name}</p>
    </div>
  );
}
