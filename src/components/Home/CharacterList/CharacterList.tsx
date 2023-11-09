import React from "react";
import { useSelector } from "react-redux";

import { selectCharacters } from "../../../store/characters/charactersSelectors";

import CharacterItem from "./CharacterItem/CharterItem";
import { List } from "./CharacterList.styled";

const CharacterList: React.FC = () => {
    const list = useSelector(selectCharacters);
    return <List>
        {list.map(item => {
            return <CharacterItem data={item} key={item.id}/>;
        })}
    </List>;
};
export default CharacterList;