import { Link } from "react-router-dom";
import { Card, ImgWrap, Img, CharacterInfo, Name, InfoTitle, InfoValue, Status } from "./CharacterItem.styled";

const CharacterItem = ({ data: {id, image, name, location, origin, species, status} }) => {
    return <Card>
        <Link to={`character/${id}`} style={{display: "flex"}}>
        <ImgWrap><Img src={image} /></ImgWrap>
        <CharacterInfo>
            <Name>{name}</Name>
            <Status>{status} - {species}</Status>
            <InfoTitle>Origin:</InfoTitle>
            <InfoValue>{origin.name}</InfoValue> 
            <InfoTitle>Last known location:</InfoTitle>
                <InfoValue style={{marginBottom: 0}}>{location.name}</InfoValue> 
        </CharacterInfo>
        </Link>
    </Card>
}
export default CharacterItem;