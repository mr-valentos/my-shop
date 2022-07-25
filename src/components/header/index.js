import React from "react";
import styled from "styled-components";
import Info from "./Info";
import HeadBody from "./Body";

export default function Header(){
    return (
        <HeaderStyled className="App-header">
        <Info />
        <HeadBody />
      </HeaderStyled>
    )
}



const HeaderStyled = styled.header`
    font-family: 'Open Sans', sans-serif;
    margin: 0px 80px;
`;




