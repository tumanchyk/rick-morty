import { Card, ImgWrap, Img, CharacterInfo, Name, InfoTitle, InfoValue, Status } from "./Character.styled";

const CharacterCard = ({ characterData: {image, name, origin, gender, location, species, status, type} }) => {
    return <Card>
        <ImgWrap><Img src={image} /></ImgWrap>
        <CharacterInfo>
            <Name>{name}</Name>
            <Status>{status} - {species}</Status>
            <InfoTitle>Origin:</InfoTitle>
            <InfoValue>{origin?.name}</InfoValue> 
            <InfoTitle>Gender:</InfoTitle>
            <InfoValue>{gender}</InfoValue> 
            <InfoTitle>Type:</InfoTitle>
            <InfoValue>{type ? type : "Undefine"}</InfoValue> 
            <InfoTitle>Last known location:</InfoTitle>
            <InfoValue>{location?.name}</InfoValue> 
        </CharacterInfo>
    </Card>
}
export default CharacterCard;

