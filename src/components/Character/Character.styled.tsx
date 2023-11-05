import styled from "@emotion/styled";

const Section = styled.section`
background: #272B33;
padding: 80px 0 252px;
`
const Card = styled.div`
width: 1220px;
height: 571px;
margin: 0 auto;
display: flex;
border-radius: 9px;
background: #3C3E44;
overflow: hidden;
`
const ImgWrap = styled.div`
height: 100%;
width: 595px;

`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const CharacterInfo = styled.div`
flex-grow: 1;
padding: 10px 40px;
display: flex;
flex-direction: column;

`
export {Section, Card, ImgWrap, Img, CharacterInfo}