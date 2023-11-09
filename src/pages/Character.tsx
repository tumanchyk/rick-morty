import  React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import CharacterCard from "../components/Character/CharacterCard";
import { Section } from "../components/Character/Character.styled";
import { getCharacterById } from "../store/characters/charactersOperations";
import { store } from "../store/store";

const Character: React.FC = () => {
    const { id } = useParams();
    type AppDispatch = typeof store.dispatch
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (id) {
            const characterId: number = parseInt(id, 10);
            dispatch(getCharacterById(characterId));
        }
    }, [dispatch, id]);

    return (
        <Section>
            <CharacterCard />
        </Section>);
};
export default Character;