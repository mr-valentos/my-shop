import React from "react";
import styled from "styled-components";
import Info from "./info";
import HeadBody from "./body";

export default function Header(){
    return (
        <HeaderStyled className="App-header">
        <Info />
        <HeadBody />
      </HeaderStyled>
    )
}



const HeaderStyled = styled.header`
    padding: 0px 80px;
`;



