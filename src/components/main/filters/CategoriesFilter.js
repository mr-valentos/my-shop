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
            component={Component}
        />    
    )
}


function Component(props){
    return(
        <>
        {options.map(e => <li><h1>{e.label}</h1></li>)}
        </>
        
    )
}

