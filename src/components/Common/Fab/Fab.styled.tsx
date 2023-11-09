import styled from "@emotion/styled";

export const FabWrap = styled.div`
position: fixed;
right: 50%;
bottom: 50px;
transform: translateX(720px);
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
`;
export const FabItem = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
background: #FFF;
border: none;
border-radius: 56px;
box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.12), 0px 9px 10px 0px rgba(0, 0, 0, 0.14),
0px 5px 5px 0px rgba(0, 0, 0, 0.20);
cursor: pointer;
transform: scale(1);
transition: all 0.5s ease-out;
margin-bottom: 8px;

&:disabled {
    background: #ccc; 
    cursor: not-allowed; 
}
&:not(:disabled):hover{
    background: #d3d3d3; 
    transform: scale(1.1);
}
`;
export const FabItemBig = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 56px;
height: 56px;
background: #FFF;
border: none;
border-radius: 56px;
box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.12), 0px 9px 10px 0px rgba(0, 0, 0, 0.14),
0px 5px 5px 0px rgba(0, 0, 0, 0.20);
cursor: pointer;
transform: scale(1);
transition: all 0.5s ease-out;

`;
