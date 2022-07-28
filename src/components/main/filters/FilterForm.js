import React from "react";
import styled from "styled-components";




export default function FilterForm(props){
    const Component = props.component

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
margin-bottom: 16px;
`;

const UlStyled = styled.ul`
display: flex;
flex-direction: column;
gap: 12px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
`;