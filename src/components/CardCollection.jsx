import characterData from "./Data";
import Card from "./Card";
export default function CardCollection() {
  const cardElements = characterData.map((character) => {
    return (
      <Card
        src={character.src}
        name={character.name}
        key={character.id}
        id={character.id}
      />
    );
  });
  return <div>{cardElements}</div>;
}
