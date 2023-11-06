import styled from "@emotion/styled";

const Card = styled.li`
width: calc((100% - 27px) / 2);
background: #3C3E44;
border-radius: 9px;
overflow: hidden;
`
const ImgWrap = styled.div`
min-height: 100%;
width: 229px;
`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const CharacterInfo = styled.div`
flex-grow: 1;
padding: 13px 14px;
display: flex;
flex-direction: column;
color: #f5f5f5
`
const Name = styled.p`
font-size: 27px;
font-weight: 800;
line-height: 29.7px;
`
const InfoTitle = styled.p`
color: #9E9E9E;
font-size: 16px;
font-weight: 500;
line-height: 26px;
`
const InfoValue = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 29.25px;
margin-bottom: 14px;

`
const Status = styled.p`
color: #FFF;
font-size: 16px;
font-weight: 500;
line-height: 26px;
text-transform: capitalize;
margin-bottom: 13px;
margin-top: 10px;
`
export { Card, ImgWrap, Img, CharacterInfo, Name, InfoTitle, InfoValue, Status };