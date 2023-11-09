import styled from "@emotion/styled";

const Name = styled.p`
font-size: 27px;
font-weight: 800;
line-height: 29.7px;
`;
const InfoTitle = styled.p`
color: #9E9E9E;
font-size: 16px;
font-weight: 500;
line-height: 26px;
`;
const InfoValue = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 29.25px;
margin-bottom: 14px;

`;
const Status = styled.p`
color: #FFF;
font-size: 16px;
font-weight: 500;
line-height: 26px;
text-transform: capitalize;
margin-bottom: 13px;
margin-top: 10px;
`;
const StatusDot = styled.span`
display: inline-block;
width: 9px;
height: 9px;
background: ${props => props.color};
margin-right: 7px;
border-radius: 50%;
`;
export { Name, InfoTitle, InfoValue, Status, StatusDot };