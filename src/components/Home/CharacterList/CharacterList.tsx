import CharacterItem from "./CharacterItem/CharterItem";
import { List } from "./CharacterList.styled";

const CharacterList = ({ list }) => {
    console.log(list);
    return <List>
        {list.map(item => {
            return <CharacterItem data={item} key={item.id}/>
        })}
    </List>
}
export default CharacterList;