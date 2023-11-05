import CharacterItem from "./CharterItem";

const CharacterList = () => {
    const list = []
    return <>
        {list.map(item => {
            return <CharacterItem data={item} />
        })}
    </>
}
export default CharacterList;