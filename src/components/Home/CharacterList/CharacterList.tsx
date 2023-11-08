import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem/CharterItem";
import { List } from "./CharacterList.styled";
import Fab from "../../Common/Fab/Fab";
import { selectCharacters } from "../../../store/characters/charactersSelectors";

const CharacterList: React.FC = () => {
    const list = useSelector(selectCharacters);
    return <List>
        {list.map(item => {
            return <CharacterItem data={item} key={item.id}/>
        })}
        <li><Fab download={true} list={list} /></li>
    </List>
}
export default CharacterList;