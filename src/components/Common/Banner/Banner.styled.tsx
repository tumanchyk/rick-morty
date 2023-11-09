import styled from "@emotion/styled";

import bgImg from "../../../assets/bgImg.png";


export const Container = styled.section`
    position: relative;
    width: 1440px;
    height: 345px; 
    margin: 0 auto;
    background: #fff url(${bgImg}) no-repeat;
    background-position: 50% 50%;
`;
export const MainTitle = styled.h1`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: #202329;
    text-align: center;
    font-size: 101px;
    font-weight: 900;
    line-height: 110%;
`;