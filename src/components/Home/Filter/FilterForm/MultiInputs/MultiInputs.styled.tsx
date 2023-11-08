import styled from "@emotion/styled"

export const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 0;
left: 240px;
width: 260px;
border-radius: 4px;
overflow: hidden;
z-index: 10;
`
export const Input = styled.input`
border: none;
height: 56px;
outline: none;
padding: 16px 12px;
&:not(:last-child){
    border-bottom: 1px solid #000;
}
`