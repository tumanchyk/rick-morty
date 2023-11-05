import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../components/Character/CharacterCard";
import { Section } from "../components/Character/Character.styled";
import fetchCharacterById from "../api/api";

const Character = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const character = fetchCharacterById(5);
    setCharacter(character);
  }, [id]);

  return <Section>
    <CharacterCard characterData={character} />
  </Section>
};
export default Character;