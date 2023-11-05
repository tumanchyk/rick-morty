import { Card, ImgWrap, Img, CharacterInfo } from "./Character.styled";
const CharacterCard = ({ characterData }) => {
    console.log(characterData);
    return <Card>
        <ImgWrap><Img /></ImgWrap>
        <CharacterInfo></CharacterInfo>
    </Card>
}
export default CharacterCard;