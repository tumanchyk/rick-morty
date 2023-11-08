import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Card, ImgWrap, Img, CharacterInfo } from "./CharacterItem.styled";
import { Name, InfoTitle, InfoValue, Status, StatusDot } from "../../../Common/CharacterInfo.styled";
import { addActions } from "../../../../store/history/historySlice";
import ICharacterItem from "../../../../types/characterItem";

const CharacterItem = ({ data: { id, image, name, location, origin, species, status } }: { data: ICharacterItem }) => {
    const dispatch = useDispatch();

    const onCharacterLink = (name: string) => {
        const actionDesc = `Переглянуто інформацію про ${name}`;
        dispatch(addActions(actionDesc));
    }

    return <Card>
        <ImgWrap><Img src={image} /></ImgWrap>
        <CharacterInfo>
            <Link to={`character/${id}`} style={{cursor: "pointer"}} onClick={() => onCharacterLink(name)}><Name>{name}</Name></Link>
            <Status>
                {status === "unknown" ? <StatusDot color={"#9E9E9E"} /> : ( status === "Dead" ? <StatusDot color={"#D63D2E"}/> : <StatusDot color={"#55CC44"} />)}
                {status} - {species}
            </Status>
            <InfoTitle>Origin:</InfoTitle>
            <InfoValue>{origin.name}</InfoValue> 
            <InfoTitle>Last known location:</InfoTitle>
            <InfoValue style={{marginBottom: 0}}>{location.name}</InfoValue> 
        </CharacterInfo>
    </Card>
}
export default CharacterItem;