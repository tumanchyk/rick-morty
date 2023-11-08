import { useSelector } from "react-redux";
import Fab from "../Common/Fab/Fab";
import {Wrapper, Card, ImgWrap, Img, CharacterInfo } from "./Character.styled";
import { Name, InfoTitle, InfoValue, Status, StatusDot } from "../Common/CharacterInfo.styled";
import { selectCharacterById } from "../../store/characters/charactersSelectors";

const CharacterCard = () => {
    const character = useSelector(selectCharacterById);
    const { image, name, origin, gender, location, species, status, type } = character;

    return <Wrapper>
        <Card>
            <ImgWrap><Img src={image} alt={`Image of ${name}`} /></ImgWrap>
            <CharacterInfo>
                <Name>{name}</Name>
                <Status>
                    {status === "unknown" ? <StatusDot color={"#9E9E9E"} /> : ( status === "Dead" ? <StatusDot color={"#D63D2E"}/> : <StatusDot color={"#55CC44"} />)}
                    {status} - {species}
                </Status>
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
        <Fab download={false} list={null} />
    </Wrapper>
}
export default CharacterCard;

