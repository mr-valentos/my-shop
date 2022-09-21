import React from "react";
import styled from "styled-components";


export const Modal = ({active, setActive, children}) => {

    return (
        <ModalDiv active={active} className="modal" onClick={setActive}>
            <ContentDiv active={active} className="modal__content" >
                {children}
            </ContentDiv>
        </ModalDiv>
    )
}

const ModalDiv = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
background-color: rgba(0, 0, 0, 0.4);
top: 0;
left: 0;
display:flex;
align-items:center;
justify-content: center;
z-index:2;
transform: scale(${props => props.active ? 1 : 0});
`

const ContentDiv = styled.div`
padding: 16px;
background-color: white;
`