import styled from "@emotion/styled";

const FooterEl = styled.footer`
padding: 47px 0 81px;
background: #202329;
`
const FooterWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Text = styled.p`
width: 212px;
color: #9E9E9E;
text-align: center;
font-size: 13.5px;
font-weight: 700;
line-height: 162.5%;
text-transform: uppercase;
margin-bottom: 18px;
`
const LogoBg = styled.div`
width: 82px;
height: 82px;
background-image: linear-gradient(227deg, rgba(255, 255, 255, 0.80) 1.89%, rgba(255, 255, 255, 0.00) 98.53%);
filter: blur(42px);
`
const Logo = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50px;
height: 50px;
z-index: 5;
`


const SocialList = styled.ul`
display: flex;
gap: 27px;
margin: 40px 0 27px;
align-items: center;
`

const Year = styled.span`
color: #9E9E9E;
font-size: 12.5px;
font-weight: 400;
line-height: 175.5%;
`
export {FooterEl, FooterWrap, Text, LogoBg, Logo, SocialList, Year}