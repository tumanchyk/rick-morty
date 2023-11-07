import { Link } from "react-router-dom";
import { Card, ImgWrap, Img, CharacterInfo } from "./CharacterItem.styled";
import { Name, InfoTitle, InfoValue, Status, StatusDot } from "../../../Common/CharacterInfo.styled";

const CharacterItem = ({ data: { id, image, name, location, origin, species, status } }) => {
    console.log(status);
    return <Card>
        <Link to={`character/${id}`} style={{display: "flex"}}>
        <ImgWrap><Img src={image} /></ImgWrap>
        <CharacterInfo>
            <Name>{name}</Name>
                <Status>
                    {status === "unknown" ? <StatusDot color={"#9E9E9E"} /> : ( status === "Dead" ? <StatusDot color={"#D63D2E"}/> : <StatusDot color={"#55CC44"} />)}
                    {status} - {species}
                </Status>
            <InfoTitle>Origin:</InfoTitle>
            <InfoValue>{origin.name}</InfoValue> 
            <InfoTitle>Last known location:</InfoTitle>
                <InfoValue style={{marginBottom: 0}}>{location.name}</InfoValue> 
        </CharacterInfo>
        </Link>
    </Card>
}
export default CharacterItem;