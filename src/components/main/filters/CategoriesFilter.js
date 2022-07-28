import React from "react";
import styled from "styled-components";
import FilterForm from "./FilterForm";


const options = [
    { value: 'all', label: 'All categories' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function CategoriesFilter(){
    return (
        <FilterForm 
            name={'Categories'} 
            component={Categories}
        />    
    )
}


function Categories(){
    return(
        <>
        {options.map(e => <LiForCategories key={e.value}><h1>{e.label}</h1><SpanCounter>6</SpanCounter></LiForCategories>)}
        </>
        
    )
}




const LiForCategories = styled.li`
display: flex;
justify-content: space-between;
`;

const SpanCounter = styled.span`
background: #F4F8EC;
border-radius: 12px;
padding: 0px 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #6A983C;
`;
