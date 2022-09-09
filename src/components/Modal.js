import React from "react";
import styled from "styled-components";


export const Modal = ({active, setActive}) => {
    return (
        <ModalDiv className="modal">
            <ContentDiv className="modal__content"><h1>hi</h1></ContentDiv>
        </ModalDiv>
    )
}

const ModalDiv = styled.div`
height: 100%;
width: 100%;
position: fixed;
background-color: white;
top: 0;
left: 0;
`

const ContentDiv = styled.div`
margin: 16px 40px;
`