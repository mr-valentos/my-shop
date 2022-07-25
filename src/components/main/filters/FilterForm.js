import React from "react";
import styled from "styled-components";




export default function FilterForm(props){
    const Component = props.component
    const {arr} = props

    return (
        <div className="product-filter__item">
            <H1ForFilter>{props.name}</H1ForFilter>
            <UlStyled>   
                <Component/>
            </UlStyled>
            
        </div>      
    )
}




const H1ForFilter = styled.h1`
font-weight: 600;
font-size: 18px;
`;

const UlStyled = styled.ul`
display: flex;
flex-direction: column;
margin-top: 16px;
gap: 12px;
`;