import React from "react";
import styled from "styled-components";

const Button = ({onClick, name}) => {
    return (
        <StyledButton onClick={onClick}> {name }</StyledButton>
    )
}

const StyledButton = styled.button`
    width: 6rem;
    height: 2rem;
    color:#efefef;
    background-color:transparent;
    border: 1px solid #efefef;
    border-radius: 0.2rem;
    box-shadow: 2px 7px 19px -7px rgba(0,0,0,0.75);
    transition: all 0.2s ease-in-out;
&:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
`

export default Button