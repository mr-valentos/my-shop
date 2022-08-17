import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const allCategories = useSelector(state => state.categories.category)
    const allProducts = useSelector(state => state.products.product)

    const counter = value => {
        let counter = 0;

        if(value === 'all categories'){
            return allProducts.length
        }

        for(let e of allProducts){
            if(e.category === value){
                counter += 1;
            }
        }
        return counter
    }

    return(
        <>
        {allCategories.map(e => (
            <LiForCategories key={e.value}>
                <h1>{e.label}</h1>
                <SpanCounter>{counter(e.value)}</SpanCounter>
            </LiForCategories>
        ))}
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
