import React from "react";
import styled from "styled-components";
import CategoriesFilter from "./CategoriesFilter";
import BrandsFilter from "./BrandsFilter";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";




export default function Filters(){
    return (
        <SectionFilter className="product-filter">
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
`;