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


export { Card, ImgWrap, Img, CharacterInfo};