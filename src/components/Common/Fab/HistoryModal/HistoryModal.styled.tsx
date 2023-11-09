import styled from "@emotion/styled";


export const HistoryCard = styled.div`
position: absolute;
bottom: 0;
width: 490px;
min-height: 200px;
padding: 16px;
padding-bottom: 70px;
display: flex;
flex-direction: column;
align-items: flex-start;
border-radius: 9px;
background: #FFF;
`;
export const Title = styled.h3`
font-size: 20px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0.25px;
margin-bottom: 16px;
`;
export const CloseBtn = styled.button`
position: absolute;
bottom: 16px;
left: 16px;
color: #1976D2;
text-align: center;
font-size: 14px;
font-weight: 500;
line-height: 36px;
letter-spacing: 1.25px;
text-transform: uppercase;
border: none;
outline: none;
cursor: pointer;
border-radius: 4px;
padding: 0px 16px;
background-color: transparent;
transition: all 0.5s ease-out;
:hover{
    background-color: #1976D2;
    color: #fff;
}
`;