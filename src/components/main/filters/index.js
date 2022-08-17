import React, {useEffect} from "react";
import styled, { keyframes } from "styled-components";
import CategoriesFilter from "./CategoriesFilter";
import BrandsFilter from "./BrandsFilter";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";




export default function Filters(props){
    let {active} = props
   
    return (
        <SectionFilter active={active} className="product-filter active">
            <CategoriesFilter/>
            <BrandsFilter/>
            <RatingFilter/>
            <PriceFilter/>
        </SectionFilter>
    )
}




const SectionFilter = styled.section`
display: flex;
flex-direction: column;  
gap: 48px;
min-width: 267px;    
margin-right: 34px;
@media (max-width: 1024px) {
    position: absolute;
    transform: ${props => props.active ? 'translateX(20px)' : 'translateX(-150%)'};
    transition: 0.5s;

    border: 1px solid #D1D1D1;
    box-shadow: 5px 5px 10px #D1D1D1;
    border-radius: 12px;
    backdrop-filter: blur(8px);
    /* background-color: #fff; */
    padding: 10px;
    z-index: 50;
}
`;

const moveFilters = keyframes`
from {
    left: - 100%;
  }

  to {
    left: 0px;
  }
`;