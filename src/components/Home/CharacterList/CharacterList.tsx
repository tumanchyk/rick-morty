import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem/CharterItem";
import { List } from "./CharacterList.styled";
import { selectCharacters } from "../../../store/characters/charactersSelectors";

const CharacterList: React.FC = () => {
    const list = useSelector(selectCharacters);
    return <List>
        {list.map(item => {
            return <CharacterItem data={item} key={item.id}/>
        })}
    </List>
}
export default CharacterList;